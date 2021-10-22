import React from 'react';

import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import {
  Login,
  Main,
  OrderFormHook,
  ViewOrdersHook,
} from '../components';
import GuardedRoute from './GuardedRoute';

const AppRouter = props => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  const token = useSelector(state => state.auth.token)
  return (
    <Router>
      <Route path='/' exact component={Main} />
      <Route path='/login' component={Login} />
      <GuardedRoute path='/order' component={OrderFormHook} token={token} />
      <GuardedRoute path='/view-orders' component={ViewOrdersHook} token={token} />
    </Router>
  )
}

export default AppRouter
