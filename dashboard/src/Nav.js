import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthButton from './AuthButton';
function Nav(props) {
  const authObj = props.authObj;

  return (
    <nav>
      <AuthButton authObj={authObj}/>

      <Link to={'/piechart'}>Pie Chart</Link>
      <Link to={'/linechart1'}>Line Chart One</Link>
      <Link to={'/linechart2'}>Line Chart Two</Link>
    </nav>
  );
}

export default Nav;
