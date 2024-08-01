import React from 'react';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { Roboto } from 'next/font/google';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppCacheProvider } from '@mui/material-nextjs/v13-pagesRouter';

import Layout from '@/widgets/Layout/UI';

import { storeWrapper } from './model/store';

import '#/global.scss';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#8276eb', // основной цвет
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = storeWrapper.useWrappedStore(rest);
  const { pageProps } = props;

  return (
    <Provider store={store}>
      <AppCacheProvider {...pageProps}>
        <ThemeProvider theme={theme}>
          <main className={roboto.className}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </main>
        </ThemeProvider>
      </AppCacheProvider>
    </Provider>
  );
}
