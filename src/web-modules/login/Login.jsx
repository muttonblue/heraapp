import React, { Component } from 'react';
import classnames from 'classnames';
import { Button ,Form ,FormGroup, ControlLabel,FormControl } from 'react-bootstrap';
import './style.css';

const redirctLogin = function(event) {
    window.location = "http://localhost:3000/login";
}

const someCallback = function (event) {
  console.log('Something ...');
}

const login = function (event){
  event.preventDefault();
  console.log('Login ' + state.inputEmail + ', ' + state.inputPassword);
  if(state.inputEmail === 'muttonblue@gmail.com') {
    window.location = "/heraapp/home";
  }
  document.title = 'Login เข้าสู่ระบบ';
};

const handleLogin = function() {
    console.log("EMail: " + this.state.email);
    console.log("Password: " + this.state.password);
}

const wellStyles = {maxWidth: 400, margin: '0 auto 10px'};
const state = {
  inputEmail: 'muttonblue@gmail.com',
  inputPassword : '12345678'
};

const loginInstance = (
  <div>
    <form className={"form-signin"} name="logout" method="POST">
     <h2 className={"form-signin-heading"}>Welcome to Hera</h2>
     <label className={"sr-only"} for="email">Email address</label>
     <input className={"form-control"} id="inputEmail" name="email" type="email"
       placeholder="Email address" value={state.inputEmail}/>
     <label className={"sr-only"} for="inputPassword">Password</label>
     <input className={"form-control"} id="inputPassword" name="password"
        type="password" placeholder="Password" required="" value={state.inputPassword}/>
     <div className={"checkbox"}>
       <label>
         <input name="remember" type="checkbox" value="remember"/> Remember me
       </label>
     </div>
     {/* <Button bsStyle="success" bsSize="small" onClick={someCallback}> Something </Button> */}
     <Button bsStyle="primary" bsSize="large" onClick={login} type="submit" block> เข้าสู่ระบบ</Button>
    </form>
  </div>
);

export default class Login extends Component {

   constructor(props){
     super(props);
     document.title = 'Login เข้าสู่ระบบ';
     document.title = this.props.title;

  }

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('Login', className)} {...props}>
          {loginInstance}
      </div>
    );
  }
}
