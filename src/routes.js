import React from 'react';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';
import { Login } from './web-modules/login';
import { Home } from './web-modules/home';
import { MedicalRecord } from './web-modules/medical-record';
import { Database } from './web-modules/database';
import { Mockup } from './web-modules/mockup';
import About from './web-modules/about';
import { UIComponets } from './web-modules/ui-components';
import ZExample from './web-modules/zexample';
import { NotFound } from './web-modules/not-found';

const Routes = (props) => (
    // <Router {...props}>
    <Router>
      <Switch>
        <Route path="/heraapp/home" title="Home" component={Home} />
        <Route path="/heraapp/about" component={About} />
        <Route path="/heraapp/medical-record" component={MedicalRecord} />
        <Route path="/heraapp/uicomponents" component={UIComponets} />
        <Route path="/heraapp/database" component={Database} />
        <Route path="/heraapp/mockup" component={Mockup} />
        <Route path="/heraapp/zexample" component={ZExample} />
        <Route path="/heraapp/login" component={Login} />
        <Route path="/heraapp" component={Login} />
        <Route path="/" component={Login} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
);
export default Routes;
