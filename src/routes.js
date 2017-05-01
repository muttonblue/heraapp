import React from 'react';
// import { Router, Route } from 'react-router';
import { Router, Route, Link } from 'react-router-dom';
import App from './app';
import About from './about';
import NotFound from './not-found';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/about" component={About} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;
