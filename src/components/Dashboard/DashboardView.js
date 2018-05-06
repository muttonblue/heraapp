import React, { Component } from "react";
import * as ReactDOM from "react-dom";
import { Route, Redirect } from "react-router";
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
  constructor(props) {
    super(props);
    this.state = {
      value: 1
    };
  }

  componentWillMount() {
    console.log(this.state.value);
  }
  componentWillReceiveProps() {
    console.log(this.state.value);
  }

  shouldComponentUpdate(nextProps) {
    console.log("shouldComponentUpdate state : " , this.state.value);
    console.log("shouldComponentUpdate nextState : " , nextProps);
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate " , this.state.value, nextState.value);
  }
  _onChangeState() {
    this.setState({ value: ++this.state.value });
  }

  _getBorderColor (value) {
    return value % 2 ? "red" : "blue";
  }

  render() {
    const { login, onSign, onHome } = this.props;
    console.log("Value : ", this.state.value);
    console.log("_getBorderColor : ", this._getBorderColor(this.state.value));
    return (
      <Form style={{ alignItems: "center", maxWidth: "400px",justifyContent:"center" }}>
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
        <Button color="info" onClick={() => onHome()}>
          Home
        </Button>
        <Button onClick={this._onChangeState.bind(this)}>click me</Button>
        <h1 style={{color : this._getBorderColor(this.state.value)}}>{this.state.value}</h1>
      </Form>
    );
  }
}
