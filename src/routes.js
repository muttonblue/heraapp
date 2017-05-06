import React from 'react';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';
//component -->>>>
import App from './App';
import Login from './Login';
import About from './About';
import UIComponent from './UIComponent';
import NotFound from './NotFound';

const Routes = (props) => (
    // <Router {...props}>
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route path="/about" component={About} />
        <Route path="/UIComponent" component={UIComponent} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
);
export default Routes;
