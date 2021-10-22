import './App.css';

import React, { Component } from 'react';

import { Provider } from 'react-redux';

import ConfigureStore from './redux/ConfigureStore';
import AppRouter from './router/appRouter';

const { subscriptionThrottler, storeCreator } = ConfigureStore

const Store = storeCreator()
const subscriptionCallback = subscriptionThrottler(Store)
Store.subscribe(() => subscriptionCallback)

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <AppRouter />
      </Provider>
    )
  }
}

export default App
