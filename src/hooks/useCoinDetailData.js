import { useQuery } from 'react-query';
import { getCoinHistory, getCoinDetail } from '../api/cryptoApi';

const useCoinDetailData = (coinId, timeFrame) => {
  const {
    data: coin,
    isLoading: isCoinLoading,
    isError: isCoinError,
  } = useQuery(['coins', 'detail', { coinId }], () => getCoinDetail(coinId), {
    staleTime: 60 * 1000,
    notifyOnChangeProps: 'tracked',
    select: (data) => data.data.coin,
    onSuccess: (data) => {
      console.log(data);
    },
  });

  const {
    data: coinHistory,
    isLoading: isHistoryLoading,
    isError: isHistoryError,
  } = useQuery(
    ['coins', 'history', { coinId, timeFrame }],
    () => getCoinHistory(coinId, timeFrame),
    {
      staleTime: 60 * 1000,
      notifyOnChangeProps: 'tracked',
      select: (data) => data.data,
      onSuccess: (data) => {
        console.log(data);
      },
      keepPreviousData: true,
    }
  );

  const isLoading = isCoinLoading || isHistoryLoading;
  const isError = isHistoryError || isCoinError;

  return { coin, coinHistory, isLoading, isError };
};

export default useCoinDetailData;
