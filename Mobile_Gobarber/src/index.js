import React from 'react';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import './config/ReacotronConfig';

import { store, persistor } from './store';

// import Routes from '~/routes';
import App from './App';

export default function Index() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
          <App />
        </PersistGate>
      </Provider>
    </>
  );
}
