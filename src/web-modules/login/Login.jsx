import React, { Component } from 'react';
import classnames from 'classnames';
import { Button ,Form ,FormGroup, ControlLabel,FormControl, Alert } from 'react-bootstrap';
import $ from "jquery";
import './style.css';

export default class Login extends Component {
  
   constructor(props){
     super(props);
     document.title = this.props.title;
     this.state = {
        inputEmail: 'muttonblue@gmail.com',
        inputPassword : '12345678',
        ajaxText : ''
      };

      this.testAjax = this.testAjax.bind(this);
      this.testState = this.testState.bind(this);
      this.login = this.login.bind(this);
  }

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('Login', className)} {...props}>
          <form className={"form-signin"} name="logout" method="POST">
           <h2 className={"form-signin-heading"}>Welcome to Hera</h2>
           <label className={"sr-only"} for="email">Email address</label>
           <input className={"form-control"} id="inputEmail" name="email" type="email"
             placeholder="Email address" value={this.state.inputEmail}/>
           <label className={"sr-only"} for="inputPassword">Password</label>
           <input className={"form-control"} id="inputPassword" name="password"
              type="password" placeholder="Password" required="" value={this.state.inputPassword}/>
           <div className={"checkbox"}>
             <label>
               <input name="remember" type="checkbox" value="remember"/> Remember me
             </label>
           </div>
           {/* <Button bsStyle="success" bsSize="small" onClick={someCallback}> Something </Button> */}
           <Button bsStyle="primary" bsSize="large" onClick={this.login} type="submit" block> เข้าสู่ระบบ</Button>

           <Button bsStyle="primary" bsSize="large" onClick={this.testAjax}  block> testAjax</Button>
           <Button bsStyle="primary" bsSize="large" onClick={this.testState}  block> testState</Button>
            state.ajaxText : <label>{this.state.ajaxText}</label>
            <span id="ajaxText-span"></span>

          <Alert bsStyle="warning">
             {this.state.ajaxText}
           </Alert>
          </form>
      </div>
    );
  }

  redirctLogin(event) {
      window.location = "http://localhost:3000/login";
  }

  someCallback = function (event) {
    console.log('Something ...');
  }

  login = function (event) {
    event.preventDefault();
    console.log('Login ' + this.state.inputEmail + ', ' + this.state.inputPassword);
    if(this.state.inputEmail === 'muttonblue@gmail.com') {
      window.location = "/heraapp/home";
    }
    document.title = 'Login เข้าสู่ระบบ';
  };

  testState() {
        this.setState( { ajaxText:'i setState' } );
  }

  testAjax = function (event) {
      console.log('test ajax');
      let data = {};

      const AjaxSucceeded = (data) => {
        console.log('AjaxSucceeded' + data);
        // this.state.ajaxText = data.glossary.title;
        this.setState( { ajaxText:data.glossary.title } );

        let t = $('ajaxText-span')
        console.log('tt' + t);
      };

      const AjaxFailed = (data) => {
        console.log('AjaxFailed' + data);
        this.setState({ajaxText:'Ajax Failed !!'});

      };
      // Submit form via jQuery/AJAX
      $.ajax({
        type: 'GET',
        url: '/json/test.json',
        data: data ,
        dataType: "text json",
        cache: false,
        success: AjaxSucceeded,
        error: AjaxFailed
      })
      .done(function(data) {
        // self.clearForm()state
          console.log('done to register' + data);
      })
      .fail(function(jqXhr) {
        console.log('failed to register' + jqXhr.responseText);
      });

  };

  handleLogin = function() {
      console.log("EMail: " + this.state.email);
      console.log("Password: " + this.state.password);
  }

  wellStyles = {maxWidth: 400, margin: '0 auto 10px'};


}
