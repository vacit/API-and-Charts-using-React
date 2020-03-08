import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   name: '',
      email: '',
      password: '',
      loggedIn: false
    };
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.login({ ...this.state });
  };

  render() {
    return (
      <div className={'login'}>
        {this.props.loggedIn ? (
          <Redirect to='/piechart' />
        ) : (
          <form onSubmit={this.handleSubmit}>
            {/* <label>
            Name
            <input
              hintText='Enter your Username'
              name='name'
              type='text'
              value={this.state.name}
              onChange={this.handleInputChange}
            ></input>
          </label> */}

            <label>
              Email
              <input
                name='email'
                type='email'
                value={this.state.email}
                onChange={this.handleInputChange}
              ></input>
            </label>

            <label>
              Password
              <input
                name='password'
                type='password'
                value={this.state.password}
                onChange={this.handleInputChange}
              ></input>
            </label>
            <input type='submit' value='Submit' />
          </form>
        )}
      </div>
    );
  }
}

export default Login;
