import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import ThemeProvider from './context/ThemeContext';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
      <Router>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Router>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
