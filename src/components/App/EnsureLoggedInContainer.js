import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Router,
  Route,
  Redirect,
  IndexRoute,
  browserHistory
} from "react-router";

class EnsureLoggedInContainer extends React.Component {
  componentDidMount() {
    const { dispatch, currentURL,setRedirectUrl } = this.props; 
    console.log("currentURL" , currentURL);
    if (!this.props.isLoggedIn) {
      browserHistory.replace("/heraapp/login");
    }
  }

  render() {
    console.log("xxx");
    if (this.props.isLoggedIn) {
      return this.props.children;
    } else {
      return null;
    }
  }
}
 
function mapStateToProps(state, ownProps) {
  return {
    login: state.login,
    isLoggedIn: state.login.isLogin,
    currentURL: ownProps.location.pathname
  };
}

export default connect(mapStateToProps)(EnsureLoggedInContainer);
