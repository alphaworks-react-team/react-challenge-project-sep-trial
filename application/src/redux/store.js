import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';

const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(ReduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
)

export default store
