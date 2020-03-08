import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
  return (
    <nav>
      <Link to={'/login'}>Login</Link>
      {/* <Link to={'/home'}>Home</Link> */}
      <Link to={'/piechart'}>Pie Chart</Link>
      <Link to={'/linechart1'}>Line Chart One</Link>
      <Link to={'/linechart2'}>Line Chart Two</Link>
    </nav>
  );
}

export default Nav;
