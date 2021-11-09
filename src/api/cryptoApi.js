import { cryptoInstance } from './axios';

cryptoInstance.interceptors.response.use((res) => {
  return res.data;
});

export const getGlobalStats = () => {
  return cryptoInstance.get('/stats');
};

export const getCryptos = (params) => {
  return cryptoInstance.get('/coins', { params });
};

export const getExchanges = (params) => {
  return cryptoInstance.get('/exchanges', { params });
};

export const getCoinDetail = (coinId) => {
  return cryptoInstance.get(`/coin/${coinId}`);
};

export const getCoinHistory = (coinId, timeFrame) => {
  return cryptoInstance.get(`/coin/${coinId}/history/${timeFrame}`);
};
