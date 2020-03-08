import React from 'react';
import { useHistory } from 'react-router-dom';

const AuthButton = (props) => {
  let history = useHistory();

  const authObj = props.authObj;
  return authObj.isAuthenticated ? (
    <p>
      Welcome!{' '}
      <button
        onClick={() => {
          authObj.signout(() => history.push('/login'));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>Please login with: teset@test.com, password: test</p>
  );
};

export default AuthButton