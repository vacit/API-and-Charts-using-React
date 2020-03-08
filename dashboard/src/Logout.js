import React from 'react';
import { Redirect } from 'react-router-dom';

const Logout = props => {
  const logout = () => {
    props.logout();
  };
  return (logout()&&true);
};

export default Logout;
