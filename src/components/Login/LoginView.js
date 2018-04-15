import React, { Component } from "react";
import * as ReactDOM from "react-dom";
import { Route, Redirect } from 'react-router'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  FormFeedback
} from "reactstrap";

import Styles from "./LoginStyle";

export default class LoginView extends Component {
  render() {
    const { login, onSign } = this.props;
    return (
      <Form style={{ alignItems: "center", maxWidth: "400px" }}>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input type="email" name="email" id="username" />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" id="password" />
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" /> Check me out
          </Label>
        </FormGroup>
        <Button color="info" onClick={() => onSign(login)}>
          {(login.isLogin && "Sign Out") || "Sign In"}
        </Button>
      </Form>
    );
  }
}
