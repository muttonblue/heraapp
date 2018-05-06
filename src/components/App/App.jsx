import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Router,
  Route,
  Redirect,
  IndexRoute,
  browserHistory
} from "react-router";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FlashMessage } from "../../components";
import styles from "./App.scss";
//https://medium.com/the-many/adding-login-and-authentication-sections-to-your-react-or-react-native-app-7767fd251bd1

class App extends Component {
  componentDidMount() {
    const { dispatch, currentURL, setRedirectUrl } = this.props;
    if (!this.props.isLoggedIn) {
    //   browserHistory.replace("/heraapp/login");
    }
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        {/* <Header /> */}
        <Navbar {...this.props} />
        <div className="container">
          <div className={styles["content"]}>{children}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    login: state.login,
    isLoggedIn: state.login.isLogin,
    currentURL: ownProps.location.pathname
  };
}

export default connect(mapStateToProps, null)(App);
