import React from 'react';

import {
  Redirect,
  Route,
} from 'react-router-dom';

const GuardedRoute = ({ component: Component, token, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      token !== undefined || null ? <Component {...props} /> : <Redirect to='/' />
    }
  />
)

export default GuardedRoute
