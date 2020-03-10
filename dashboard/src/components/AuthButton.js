import React from 'react';
import { useHistory } from 'react-router-dom';

const AuthButton = props => {
  let history = useHistory();

  const authObj = props.authObj;
  return authObj.isAuthenticated ? (
    <button
      className='btn btn-sm btn-outline-info mr-3 ml-3'
      onClick={() => {
        authObj.signout(() => history.push('/login'));
      }}
    >
      Sign out
    </button>
  ) : (
    <small className='text-right text-muted '>
      Please login with: teset@test.com, password: test
    </small>
  );
};

export default AuthButton;
