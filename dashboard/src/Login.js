// import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
// class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       //   name: '',
//       email: '',
//       password: '',
//     };
//   }

//   handleInputChange = event => {
//     const target = event.target;
//     const value = target.value;
//     const name = target.name;

//     this.setState({
//       [name]: value
//     });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     this.props.login({ ...this.state });
//   };
//   //   componentDidMount = () => {
//   //     // console.log(this.props);
//   //     if (this.props.location.state) {
//   //       if (this.props.location.state.logOut === false) this.props.logOut();
//   //     }
//   //   };

//   render() {
//     if (this.props.loggedIn){
//        return  <Redirect to='/piechart' />
//     }else{
//        return  (
// <div className={'login'}>
//   <form onSubmit={this.handleSubmit}>
//     {/* <label>
//     Name
//     <input
//       hintText='Enter your Username'
//       name='name'
//       type='text'
//       value={this.state.name}
//       onChange={this.handleInputChange}
//     ></input>
//   </label> */}

//     <label>
//       Email
//       <input
//         name='email'
//         type='email'
//         value={this.state.email}
//         onChange={this.handleInputChange}
//       ></input>
//     </label>

//     <label>
//       Password
//       <input
//         name='password'
//         type='password'
//         value={this.state.password}
//         onChange={this.handleInputChange}
//       ></input>
//     </label>
//     <input type='submit' value='Submit' />
//   </form>
// </div>
//           );
//         }
//   }
// }

// export default Login;

import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const LoginPage = props => {
  let history = useHistory();
  let location = useLocation();
  const authObj = { ...props.authObj };

  let { from } = location.state || { from: { pathname: '/piechart' } };
  //   let login = () => {
  //     authObj.authenticate();
  //     history.replace(from);
  //   };

  const handleSubmit = event => {
    event.preventDefault();
    authObj.authenticate();
    history.replace(from);
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <div className={'login'}>
        <form onSubmit={handleSubmit}>
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
          <input type='submit' value='Login' />
        </form>
      </div>
      {/* <button onClick={login}>Log in</button> */}
    </div>
  );
};
export default LoginPage;
