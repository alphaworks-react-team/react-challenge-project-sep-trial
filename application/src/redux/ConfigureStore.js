import throttle from 'lodash';
import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';

const setSavedState = state => {
  try {
    const serializedState = JSON.stringify(state)
    return localStorage.setItem('Global State', serializedState)
  } catch (error) {
    console.log(error.message)
  }
}

const getSavedState = store => {
  setSavedState({ auth: store.getState().auth })
}

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('Global State')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (error) {
    return console.log({
      'Error Message': error.message,
    })
  }
}
const persistedState = loadState()

const storeCreator = () => {
  try {
    const store = createStore(
      reducers,
      persistedState,
      compose(
        applyMiddleware(ReduxThunk),
        window.__REDUX_DEVTOOLS_EXTENSION__
          ? window.__REDUX_DEVTOOLS_EXTENSION__()
          : f => f
      )
    )
    return store
  } catch (error) {
    console.log(error.message)
  }
}

const configuration = storeCreator => {
  // storeCreator()
  //   .then(store => {
  //     const throttleSubscription = throttle(
  //       setSavedState({ auth: store.getState().auth }),
  //       1000,
  //       {
  //         leading: true,
  //       }
  //     )
  //     store.subscribe(() => throttleSubscription)
  //     return store
  //   })
  //   .catch(error => {
  //     console.log(error.message)
  //   })
}

const subscriptionThrottler = store => {
  return throttle(setSavedState({ auth: store.getState().auth }), 1000, {
    leading: true,
  })
}

const ConfigureStore = { storeCreator, subscriptionThrottler }
export default ConfigureStore
