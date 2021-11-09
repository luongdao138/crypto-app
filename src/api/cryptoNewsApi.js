import { cryptoNewsInstance } from './axios';

cryptoNewsInstance.interceptors.response.use((res) => {
  return res.data;
});

export const searchNews = (params) => {
  return cryptoNewsInstance.get('/search', { params });
};
