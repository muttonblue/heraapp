import React from 'react';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';
//component -->>>>
import App from './app';
import About from './about';
import NotFound from './not-found';

const Routes = (props) => (
    // <Router {...props}>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
);
export default Routes;
