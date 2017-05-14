import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import Header from './../Components/Layout';
import { Button } from 'react-bootstrap';
import './style.css';
import './style-scss.scss';


export default class Login extends Component {
   static propTypes = {}
   static defaultProps = {}
   state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('Login', className)} {...props}>
        <Header/>
        <h1> Welcome to Hera</h1>
      </div>
    );
  }
}
