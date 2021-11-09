import React from 'react';
import Wrapper from './styles/CryptoCurrencies.styles';
import { useInfiniteQuery } from 'react-query';
import { getCryptos } from '../api/cryptoApi';
import { CryptoItem, Loading } from '../components';
import HomeWrapper from './styles/Home.styles';
import InfiniteScroll from 'react-infinite-scroll-component';
import { convertNumber } from '../helpers/convertNumber';

const CryptoCurrencies = () => {
  const {
    hasNextPage,
    isFetchingNextPage,
    isError,
    isLoading,
    data,
    fetchNextPage,
  } = useInfiniteQuery(
    ['coins', 'list'],
    ({ pageParam = { offset: 0, limit: 40 } }) => getCryptos(pageParam),
    {
      staleTime: 60 * 10000, // 1 minute
      notifyOnChangeProps: 'tracked',
      getNextPageParam: (lastPage, allPages) => {
        const total_coins = lastPage.data.stats.total;
        const offset = lastPage.data.stats.offset;
        const limit = lastPage.data.stats.limit;
        if (offset + limit < total_coins) {
          return {
            limit,
            offset: offset + limit,
          };
        } else {
          return undefined;
        }
      },
    }
  );

  const dataLength =
    data?.pages[data.pages.length - 1].data.stats.offset +
      data?.pages[data.pages.length - 1].data.stats.limit || 0;

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
    <Wrapper>
      <Wrapper.Input placeholder='Search cryptocurrency...' type='text' />
      <Wrapper.List>
        <InfiniteScroll
          dataLength={dataLength}
          hasMore={hasNextPage}
          loader={null}
          next={fetchNextPage}
        >
          {data.pages.map((group) =>
            group.data.coins.map((coin) => (
              <CryptoItem
                key={coin.id}
                rank={coin.rank}
                name={coin.name}
                iconUrl={coin.iconUrl}
                price={convertNumber(`${coin.price} ($)`)}
                market_cap={convertNumber(`${coin.marketCap} ($)`)}
                daily_change={`${coin.change}%`}
                id={coin.id}
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
      </Wrapper.List>
    </Wrapper>
  );
};

export default CryptoCurrencies;
