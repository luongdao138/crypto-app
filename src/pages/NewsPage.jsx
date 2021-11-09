import { useState } from 'react';
import { useInfiniteQuery } from 'react-query';
import { searchNews } from '../api/cryptoNewsApi';
import NewsWrapper from './styles/News.styles';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Loading, NewsItem } from '../components';
import moment from 'moment';
import HomeWrapper from './styles/Home.styles';
import useDebounce from '../hooks/useDebounce';
import Wrapper from './styles/CryptoCurrencies.styles';

const NewsPage = () => {
  const [searchTerm, setSearchTerm] = useState('Cryptocurrency');
  const [temp, setTemp] = useState('');

  useDebounce(
    () => {
      if (!temp) {
        setSearchTerm('Cryptocurrency');
      } else {
        setSearchTerm(temp);
      }
    },
    800,
    [temp]
  );

  const { List } = NewsWrapper;
  const {
    data,
    isLoading,
    isError,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    isPreviousData,
  } = useInfiniteQuery(
    ['news', { searchTerm }],
    ({ pageParam = { offset: 0, count: 24 } }) =>
      searchNews({ ...pageParam, q: searchTerm }),
    {
      staleTime: 60 * 1000, // 2 minutes
      notifyOnChangeProps: 'tracked',
      getNextPageParam: (lastPage, allPages) => {
        const total_count = lastPage.totalEstimatedMatches;
        const current_count = allPages.reduce(
          (acc, current) => acc + current.value.length,
          0
        );
        if (current_count < total_count) {
          return {
            count: 24,
            offset: current_count,
          };
        } else {
          return undefined;
        }
      },
      keepPreviousData: true,
    }
  );
  if (isLoading) {
    return (
      <HomeWrapper.LoaderWrapper>
        <Loading />
      </HomeWrapper.LoaderWrapper>
    );
  }

  if (isError) {
    return <p>Error</p>;
  }

  return (
    <NewsWrapper>
      <Wrapper.Input
        value={temp}
        onChange={(e) => setTemp(e.target.value)}
        placeholder='Search news...'
        type='text'
      />
      {isPreviousData && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '20px',
          }}
        >
          <Loading type='ThreeDots' />
        </div>
      )}
      <List>
        <InfiniteScroll
          hasMore={hasNextPage}
          loader={null}
          next={fetchNextPage}
          dataLength={data.pages.reduce(
            (acc, current) => acc + current.value.length,
            0
          )}
        >
          {data.pages.map((group) =>
            group.value.map((newsItem, index) => (
              <NewsItem
                key={index}
                name={newsItem.name}
                description={newsItem.description}
                provider_url={
                  newsItem.provider[0]?.image?.thumbnail?.contentUrl
                }
                image_url={newsItem.image?.thumbnail.contentUrl}
                provider_name={newsItem.provider[0]?.name}
                published_at={moment(newsItem.datePublished).fromNow()}
                url={newsItem.url}
              />
            ))
          )}
        </InfiniteScroll>
        {isFetchingNextPage && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '30px',
            }}
          >
            <Loading />
          </div>
        )}
      </List>
    </NewsWrapper>
  );
};

export default NewsPage;
