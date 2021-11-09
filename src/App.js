import GlobalStyle from './GlobalStyle';
import { Routes, Route } from 'react-router-dom';
import {
  Layout,
  HomePage,
  CryptoCurrencies,
  ExchangesPage,
  NewsPage,
  CryptoDetailPage,
} from './pages';
import { useThemeContext } from './context/ThemeContext';
import { ThemeProvider } from 'styled-components';

const App = () => {
  const { theme } = useThemeContext();
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route
          path='/'
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path='/cryptocurrencies'
          element={
            <Layout>
              <CryptoCurrencies />
            </Layout>
          }
        />
        <Route
          path='/exchanges'
          element={
            <Layout>
              <ExchangesPage />
            </Layout>
          }
        />
        <Route
          path='/news'
          element={
            <Layout>
              <NewsPage />
            </Layout>
          }
        />
        <Route
          path='/cryptocurrencies/:coinId'
          element={
            <Layout>
              <CryptoDetailPage />
            </Layout>
          }
        />
      </Routes>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
