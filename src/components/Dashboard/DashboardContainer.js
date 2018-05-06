import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { signIn, signOut } from "./DashboardAction";
import View from "./DashboardView";

const mapStateToProps = state => ({
  login: state.login
});

const mapDispatchToProps = dispatch => ({
  onInit() {
    console.log("Dashboard onInit ::: ");
  },
  onHome() {
    dispatch(push("/heraapp/pages"));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
