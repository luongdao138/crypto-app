import { ExchangeItem, Loading } from '../components';
import ExchangesWrapper from './styles/Exchanges.styles';
import { useQuery } from 'react-query';
import { getExchanges } from '../api/cryptoApi';
import { useState } from 'react';
import HomeWrapper from './styles/Home.styles';
import { convertNumber } from '../helpers/convertNumber';
import ReactPaginate from 'react-paginate';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const ExchangesPage = () => {
  const { Header, List, Pagination } = ExchangesWrapper;
  const [page, setPage] = useState(0);
  const { data, isLoading, isError } = useQuery(
    ['exchanges', { page, limit: 20 }],
    () =>
      getExchanges({
        offset: 20 * page,
        limit: 20,
      }),
    {
      staleTime: 2 * 60 * 1000, // 2 minute
      notifyOnChangeProps: 'tracked',
      keepPreviousData: true,
    }
  );

  const handlePageChange = (event) => {
    setPage(event.selected);
  };

  if (isLoading) {
    return (
      <HomeWrapper.LoaderWrapper>
        <Loading />
      </HomeWrapper.LoaderWrapper>
    );
  }

  if (isError) {
    return <p>Error...</p>;
  }

  return (
    <ExchangesWrapper>
      <Header>
        <span>Exchanges</span>
        <span>24h Trade Volume</span>
        <span>Markets</span>
        <span>Changes</span>
      </Header>
      <List>
        {data.data?.exchanges.map((exchange) => {
          return (
            <ExchangeItem
              key={exchange.id}
              name={exchange.name}
              rank={exchange.rank}
              iconUrl={exchange.iconUrl}
              volume={`$${convertNumber(exchange.volume)}`}
              number_of_markets={convertNumber(exchange.numberOfMarkets)}
              market_share={`${convertNumber(exchange.marketShare)}%`}
              description={exchange.description}
            />
          );
        })}
      </List>
      <Pagination>
        <ReactPaginate
          breakLabel='...'
          nextLabel={<MdChevronRight />}
          previousLabel={<MdChevronLeft />}
          onPageChange={handlePageChange}
          pageRangeDisplayed={2}
          pageCount={Math.ceil(data.data.stats.total / data.data.stats.limit)}
          renderOnZeroPageCount={null}
          pageClassName='item'
          previousClassName='item'
          nextClassName='item'
        />
      </Pagination>
    </ExchangesWrapper>
  );
};

export default ExchangesPage;
