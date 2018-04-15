import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "./LoginAction";
import View from "./LoginView";

const mapStateToProps = state => ({
  login: state.login
});

const mapDispatchToProps = dispatch => ({
  onSign(login) {
    console.log("onSign::", login);
    let _login = {...login};
    _login.username = "muttonblue";
    _login.isLogin = true;
    _login.fullname = "John Rambo";
    
    dispatch({ 
      type: 'LOAD_PAGES_SUCCESS',
      pages :[],
      flashMessage : { msg : 'ทำการค้นหาเรียบร้อย' , type: 'ERROR' }
    })
    // dispatch({ type: "LOGIN/SIGN", login : _login}); 
    dispatch(signIn(_login));
  }, 
   onSignX : (login) => {
     console.log("login::", login);
     dispatch(Action.signIn(login));
     console.log("login:: dispatch -----");
   }
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
