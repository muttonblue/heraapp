import React from 'react';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';
import { Login } from './web-modules/login';
import { Home } from './web-modules/home';
import About from './web-modules/about';
import ZExample from './web-modules/zexample';
import { NotFound } from './web-modules/not-found';

const appName = 'heraapp'
const Routes = (props) => (
    // <Router {...props}>
    <Router>
      <Switch>
        <Route exact path="/heraapp/home" component={Home} />
        <Route path="/" component={Login} />
        <Route path="/heraapp/login" component={Login} />
        <Route path="/heraapp/about" component={About} />
        <Route path="/heraapp/zexample" component={ZExample} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
);
export default Routes;
