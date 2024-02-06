import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@/store';

const App = ({ Component, pageProps }: { Component: any, pageProps: any }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
};

export default App
