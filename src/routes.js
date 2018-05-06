import React from "react";
import { connect } from "react-redux";
import {
  Router,
  Route,
  Redirect,
  IndexRoute,
  browserHistory,
  hashHistory
} from "react-router";
import { Pages, Users, ShowPage, NewPage } from "./containers";
import {
  App,
  Security,
  Login,
  Home,
  OfficeDev,
  MaterialUI,
  Reactstrap,
  SemanticUI
} from "./components";

const menu = [{ path: "login", indexRoute: Login }];

export default (store, history) => {
//   console.log("@history :: " , history);
//   console.log("@browserHistory :: " , browserHistory);
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
        <Route component={Security}>
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
