import React from 'react';
import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import Layout from '../components/Layout/Layout';
import theme from '../styles/theme';
import { store } from '../redux/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Layout>
        <CssBaseline />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
    </Provider>
    </>
  );
}

export default MyApp;
