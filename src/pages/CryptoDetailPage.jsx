import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { DetailInfo, LineChart, Loading, Select } from '../components';
import useCoinDetailData from '../hooks/useCoinDetailData';
import CoinDetailWrapper from './styles/CoinDetail.styles';
import HomeWrapper from './styles/Home.styles';
import { convertNumber } from '../helpers/convertNumber';
import convertToChartData from '../helpers/convertToChartData';
import HTMLReactParser from 'html-react-parser';
import {
  AiOutlineDollarCircle,
  AiOutlineNumber,
  AiOutlineThunderbolt,
  AiOutlineTrophy,
  AiOutlineFund,
  AiOutlineMoneyCollect,
  AiOutlineExclamationCircle,
  AiOutlineCheck,
  AiOutlineClose,
} from 'react-icons/ai';

const options1 = [
  {
    icon: <AiOutlineDollarCircle />,
    label: 'Price to USD',
    value: '',
  },
];

const options2 = [{}];

const CryptoDetailPage = () => {
  const { coinId } = useParams();
  const [timeFrame, setTimeFrame] = useState('24h');
  const { coin, coinHistory, isLoading, isError } = useCoinDetailData(
    coinId,
    timeFrame
  );
  const { Content, Header, Description, Links } = CoinDetailWrapper;

  const data = useMemo(() => {
    return convertToChartData(coinHistory?.history);
  }, [coinHistory]);

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
    <CoinDetailWrapper>
      <Header>
        <p className='main-title'>
          {coin.name} ({coin.slug}) Price
        </p>
        <p className='sub-title'>
          {coin.name} live price in US Dollar (USD). View value statistics,
          market cap and supply.
        </p>
      </Header>
      <div className='divider'></div>
      <Select timeFrame={timeFrame} setTimeFrame={setTimeFrame} />
      <LineChart
        price={` $${convertNumber(coin.price)}`}
        coin_name={coin.name}
        change={`${coinHistory.change}%`}
        data={data}
      />
      <Content>
        <DetailInfo
          title={`${coin.name} Value Statistics`}
          subTitle='An overview showing the statistics of Bitcoin, such as the base and quote currency, the rank, and trading volume.'
          options={[
            {
              icon: <AiOutlineDollarCircle />,
              label: 'Price to USD',
              value: `$${convertNumber(coin.price)}`,
            },
            {
              icon: <AiOutlineNumber />,
              label: 'Rank',
              value: coin.rank,
            },
            {
              icon: <AiOutlineThunderbolt />,
              label: '24h Volume',
              value: `$${convertNumber(coin.volume)}`,
            },
            {
              icon: <AiOutlineDollarCircle />,
              label: 'Market Cap',
              value: `$${convertNumber(coin.marketCap)}`,
            },
            {
              icon: <AiOutlineTrophy />,
              label: 'All-time-high(daily avg.)',
              value: `$${convertNumber(coin.allTimeHigh.price)}`,
            },
          ]}
        />
        <DetailInfo
          title={`Other Stats Info`}
          subTitle='An overview showing the statistics of Bitcoin, such as the base and quote currency, the rank, and trading volume.'
          options={[
            {
              icon: <AiOutlineFund />,
              label: 'Number Of Markets',
              value: convertNumber(coin.numberOfMarkets),
            },
            {
              icon: <AiOutlineMoneyCollect />,
              label: 'Number Of Exchanges',
              value: convertNumber(coin.numberOfExchanges),
            },
            {
              icon: <AiOutlineExclamationCircle />,
              label: 'Approved Supply',
              value: coin.approvedSupply ? (
                <AiOutlineCheck />
              ) : (
                <AiOutlineClose />
              ),
            },
            {
              icon: <AiOutlineExclamationCircle />,
              label: 'Total Supply',
              value: `$${convertNumber(coin.totalSupply)}`,
            },
            {
              icon: <AiOutlineExclamationCircle />,
              label: 'Circulating Supply',
              value: `$${convertNumber(coin.circulatingSupply)}`,
            },
          ]}
        />
        <Description>
          <p className='title'>What is {coin.name}?</p>
          {HTMLReactParser(coin.description)}
        </Description>
        <Links>
          <p className='title'>{coin.name} Links</p>
          <ul>
            {coin.links.map((link, index) => (
              <li key={index}>
                <span className='type'>{link.type}</span>
                <a target='_blank' className='url' href={link.url}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </Links>
      </Content>
    </CoinDetailWrapper>
  );
};

export default CryptoDetailPage;
