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
  //   componentDidMount() {
  //     const { dispatch, currentURL, setRedirectUrl } = this.props;
  //     console.log("Security currentURL", currentURL);
  //     console.log("Security componentDidMount", JSON.stringify(this.props));
  //     // if (!this.props.isLoggedIn) {
  //     //   browserHistory.replace("/heraapp/login");
  //     // }
  //   }

  render() {
    const { children } = this.props;

    return (
      <div>
        <label>ccc : {JSON.stringify(this.props.login)}</label>
        {children}
      </div>
    );
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
