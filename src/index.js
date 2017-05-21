import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';
import {Header, Footer} from './web-modules/layout';
import './index.css';

class SuperRoot extends Component {
  constructor() {
    super();
    console.log("ROOTss");
  }

  render() {
    return (
      <div>
        <Header actionName="SuperRoot"/>
        <Footer/>
      </div>
    );
  }
}

ReactDOM.render(
  <SuperRoot/>, document.getElementById('super-root'));

ReactDOM.render(
  <Routes history={BrowserRouter}/>, document.getElementById('root'));
