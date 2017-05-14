import React, { Component } from 'react';
import classnames from 'classnames';
import { Button } from 'react-bootstrap';
import { Header, Footer } from './../layout';
import logo from './logo.svg';
import './style.css';

class Home extends Component {
  static propTypes = {}
  static defaultProps = {}
  state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('Home', className)} {...props}>
        <Header/>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to Heraapp</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/Home.js</code> and save to reload.
        </p>
        <Button> Click Here </Button>
        <Button>Default</Button>
        <Footer/>
      </div>
    );
  }
}

export default Home;
