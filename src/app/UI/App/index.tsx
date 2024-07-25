import React from 'react';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';

import { storeWrapper } from '../../model/store';

import '@app/styles/global.scss';

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = storeWrapper.useWrappedStore(rest);
  const { pageProps } = props;

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
