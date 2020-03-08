import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = (props) => {
    const {authObj,children,...rest}=props
    console.log(props)
  return (
    <Route
    {...rest}
      render={({ location }) =>
        authObj.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};
export default PrivateRoute