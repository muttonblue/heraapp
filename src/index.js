import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import {Router,Route, Link, browserHistory} from "react-router"
import './index.css';

ReactDOM.render(
  // <Router history={browserHistory}>
  //   <Route path="/" Component={App}/>
  //   <Route path="/home" Component={App}/>
  //   <Route path="/medical-record" Component={App}/>
  //   <Route path="/admin" Component={App}/>
  // </Router> ,
  // document.getElementById('root')

   <App />, document.getElementById('root')
);
