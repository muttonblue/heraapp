import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import Header from './Layout/Header.js';
import Footer from './Layout/Footer.js';
import { Button } from 'react-bootstrap';
import './style.css';

export default class Login extends Component {
   static propTypes = {}
   static defaultProps = {}
   state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('Login', className)} {...props}>
        <Header/>
        <h1> LLLLLLLLLLLLLLLLLLLL</h1>
        <Footer name = "xxx" />
      </div>
    );
  }
}
