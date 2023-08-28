import React from 'react';
import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import theme from '../styles/theme';
import { store } from '../redux/store';
import { config } from '../config/config';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <noscript dangerouslySetInnerHTML={{
      __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${config.gtm}"
        height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}>
      </iframe>`,
    }} >
    </noscript>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Head>
      <script>
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NZCW3DK');
        `}
      </script>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="google-site-verification" content="kxT_b2CFU-SEjcuM4IYYSMf3HpDFF8JYwTje738p2TM" />
      </Head>
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
