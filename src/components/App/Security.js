import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Router,
  Route,
  Redirect,
  IndexRoute,
  browserHistory
} from "react-router";

class Security extends React.Component {
  componentWillMount() {
    const { dispatch, currentURL, setRedirectUrl } = this.props;
    if (!this.props.isLoggedIn) {
      browserHistory.replace("/heraapp/login");
    }
  }

  render() {
    const { children, login } = this.props;
    const isLogin = login && login.isLogin ? true : false;
    return (isLogin && children) || <div>not permission</div>;
  }
}

function mapStateToProps(state, ownProps) {
  return {
    ...this.state,
    login: state.login,
    isLoggedIn: state.login.isLogin,
    currentURL: ownProps.location.pathname
  };
}

export default connect(mapStateToProps, null)(Security);
