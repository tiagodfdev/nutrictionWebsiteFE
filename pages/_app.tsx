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
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/favicon.png" color="#5bbad5" />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <meta name="theme-color" content={theme.palette.primary.main} />
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
