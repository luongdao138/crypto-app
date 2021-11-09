import { getCryptos, getGlobalStats } from '../api/cryptoApi';
import { searchNews } from '../api/cryptoNewsApi';
import { useQuery } from 'react-query';
const useHomePageData = () => {
  const {
    data: globalStats,
    isError: isStatsError,
    isLoading: isStatsLoading,
  } = useQuery(['globalStats'], getGlobalStats, {
    staleTime: 60 * 1000, // 30 seconds
    notifyOnChangeProps: 'tracked',
    select: (data) => data.data,
    retry: 2,
  });
  const {
    data: coins,
    isError: isCoinsError,
    isLoading: isCoinsLoading,
  } = useQuery(
    ['coins', 'home_page'],
    () => getCryptos({ offset: 0, limit: 20 }),
    {
      staleTime: 60 * 1000, // 30 seconds
      notifyOnChangeProps: 'tracked',
      select: (data) => data.data.coins,
      retry: 2,
    }
  );
  const {
    data: news,
    isError: isNewsError,
    isLoading: isNewsLoading,
  } = useQuery(
    ['news', 'home_page'],
    () => searchNews({ offset: 0, count: 9, q: 'Cryptocurrency' }),
    {
      staleTime: 60 * 1000, // 30 seconds
      notifyOnChangeProps: 'tracked',
      select: (data) => data.value,
      retry: 2,
    }
  );

  const isLoading = isCoinsLoading || isNewsLoading || isStatsLoading;
  const isError = isNewsError || isCoinsError || isStatsError;

  return { globalStats, coins, news, isLoading, isError };
};

export default useHomePageData;
