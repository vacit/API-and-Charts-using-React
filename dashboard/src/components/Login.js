import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const LoginPage = props => {
  let history = useHistory();
  let location = useLocation();
  const [inputValue, setInputValue] = useState({ email: '', password: '' });

  const authObj = { ...props.authObj };

  let { from } = location.state || { from: { pathname: '/home' } };

  const handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setInputValue({
      ...inputValue,
      [name]: value
    });
  };
  const handleSubmit = event => {
    event.preventDefault();
    authObj.authenticate(inputValue);
    history.replace(from);
  };
  return (
    <div
      className='
      login
      bg-info 
      text-white
      d-flex 
      flex-column
      flex-lg-row
      flex-xl-row
      align-items-center
      justify-content-lg-around
      justify-content-xl-around
      '
      // justify-content-between
      style={{ height: '90vh' }}
    >
      <div className=' px-4 my-4 mt-5 text-center align-self-center '>
        <h1 className=' font-weight-bold'>Mediterranean Sea Hotels Group</h1>
        <small className=' form-text '>
          Please sign in to start using our statistics app
        </small>
      </div>

      <form className='mx-1 my-4 form-block' onSubmit={handleSubmit}>
        <div className='form-group '>
          <label className=''>
            Email
            <input
              className='form-control'
              name='email'
              type='email'
              value={inputValue.email}
              onChange={handleInputChange}
              placeholder='mail@domain.com'
            ></input>
          </label>
        </div>

        <div className='form-group'>
          <label>
            Password
            <input
              className='form-control'
              name='password'
              type='password'
              value={inputValue.password}
              onChange={handleInputChange}
            ></input>
          </label>
        </div>
        <input className='btn btn-primary mr-2 ' type='submit' value='Login' />
      </form>
    </div>
  );
};
export default LoginPage;
