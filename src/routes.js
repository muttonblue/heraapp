import React from "react";
import { connect } from "react-redux";
import {
  Router,
  Route,
  Redirect,
  IndexRoute,
  browserHistory
} from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Pages, Users, ShowPage, NewPage } from "./containers";
import {
  App,
  Login,
  Home,
  OfficeDev,
  MaterialUI,
  Reactstrap,
  SemanticUI,
  EnsureLoggedInContainer
} from "./components";

const menu = [{ path: "login", indexRoute: Login }];

export default () => {
  return (
    <Router history={browserHistory}>
      <Route path="/heraapp" component={App}>
        {/* <IndexRoute component={Home} /> */}
        <route path="home">
          <IndexRoute component={Home} />
        </route>
        <route path="login">
          <IndexRoute component={Login} />
        </route>
        <Route component={EnsureLoggedInContainer}>
          <route path="pages">
            <IndexRoute component={Pages} />
            <Route path=":id" component={ShowPage} />
          </route>
          <route path="users">
            <IndexRoute component={Users} />
          </route>
          <route path="OfficeDev">
            <IndexRoute component={OfficeDev} />
          </route>
          <route path="MaterialUI">
            <IndexRoute component={MaterialUI} />
          </route>
          <route path="Reactstrap">
            <IndexRoute component={Reactstrap} />
          </route>
          <route path="SemanticUI">
            <IndexRoute component={SemanticUI} />
          </route>
        </Route>
      </Route>
    </Router>
  );
};
