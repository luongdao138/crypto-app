import React from 'react';
import { CryptoItem, StatItem, NewsItem, Loading } from '../components';
import HomeWrapper from './styles/Home.styles';
import { Link } from 'react-router-dom';
import useHomePageData from '../hooks/useHomePageData';
import NumberFormat, { convertNumber } from '../helpers/convertNumber';
import moment from 'moment';
import { BsArrowRight } from 'react-icons/bs';

const HomePage = () => {
  const { globalStats, coins, news, isLoading, isError } = useHomePageData();
  const { Group, Title, LoaderWrapper } = HomeWrapper;

  if (isLoading) {
    return (
      <LoaderWrapper>
        <Loading />
      </LoaderWrapper>
    );
  }

  if (isError) {
    return <p>Error</p>;
  }

  return (
    <HomeWrapper>
      <Group>
        <div className='header'>
          <Title>Global Crypto Stats</Title>
        </div>
        <div className='stats'>
          <StatItem
            label={'Total Cryptocurrencies'}
            value={<NumberFormat value={globalStats.totalCoins} />}
          />
          <StatItem
            label='Total Exchanges'
            value={<NumberFormat value={globalStats.totalExchanges} />}
          />
          <StatItem
            label='Total Market Cap'
            value={`$${convertNumber(globalStats.totalMarketCap)}`}
          />
          <StatItem
            label='Total Markets'
            value={convertNumber(globalStats.totalMarkets)}
          />
          <StatItem
            label='Total 24h Volume'
            value={`$${convertNumber(globalStats.total24hVolume)}`}
          />
        </div>
      </Group>
      <Group>
        <div className='header'>
          <Title>Top 20 Cryptos In The World</Title>
          <Link to='/cryptocurrencies'>
            <span>Show more</span>
            <BsArrowRight />
          </Link>
        </div>
        <div className='cryptos'>
          {coins.map((coin) => (
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
          ))}
        </div>
      </Group>
      <Group>
        <div className='header'>
          <Title>Latest Crypto News</Title>
          <Link to='/news'>
            <span>Show more</span>
            <BsArrowRight />
          </Link>
        </div>
        <div className='news'>
          {news.map((newsItem, index) => (
            <NewsItem
              key={index}
              name={newsItem.name}
              description={newsItem.description}
              provider_url={newsItem.provider[0]?.image?.thumbnail?.contentUrl}
              image_url={newsItem.image?.thumbnail.contentUrl}
              provider_name={newsItem.provider[0]?.name}
              published_at={moment(newsItem.datePublished).fromNow()}
              url={newsItem.url}
            />
          ))}
        </div>
      </Group>
    </HomeWrapper>
  );
};

export default HomePage;
