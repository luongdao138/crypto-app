import axios from 'axios';

export const cryptoInstance = axios.create({
  baseURL: 'https://coinranking1.p.rapidapi.com',
  headers: {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'b566622117msh553f4288430138ap1d3a79jsnce3480e7da91',
    'x-access-token': 'i-have-to-migrate-to-v2'
  },
});

export const cryptoNewsInstance = axios.create({
  baseURL: 'https://bing-news-search1.p.rapidapi.com/news',
  headers: {
    'x-bingapis-sdk': 'true',
    'x-access-token': 'i-have-to-migrate-to-v2',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': 'b566622117msh553f4288430138ap1d3a79jsnce3480e7da91',
  },
  params: {
    freshness: 'Day',
    textFormat: 'Raw',
    safeSearch: 'Off',
  },
});
