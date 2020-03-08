import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const LoginPage = props => {
  let history = useHistory();
  let location = useLocation();
  const [inputValue, setInputValue] = useState({ email: '', password: '' });

  const authObj = { ...props.authObj };

  let { from } = location.state || { from: { pathname: '/piechart' } };

  const handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setInputValue({
      [name]: value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    authObj.authenticate();
    history.replace(from);
  };

  return (
    <div>
      {/* <p>You must log in to view the page at {from.pathname}</p> */}
      <div className={'login'}>
        <form onSubmit={handleSubmit}>
          <label>
            Email
            <input
              name='email'
              type='email'
              value={inputValue.email}
              onChange={handleInputChange}
            ></input>
          </label>

          <label>
            Password
            <input
              name='password'
              type='password'
              value={inputValue.password}
              onChange={handleInputChange}
            ></input>
          </label>
          <input type='submit' value='Login' />
        </form>
      </div>
    </div>
  );
};
export default LoginPage;
