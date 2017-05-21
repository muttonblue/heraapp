import React, { Component } from 'react';
import classnames from 'classnames';
import { Button, FormGroup, ControlLabel,FormControl, HelpBlock  } from 'react-bootstrap';
// import { Header, Footer } from './../layout';
import logo from './logo.svg';
// import './home.css';

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
    );
  }

class Home extends Component {
   constructor(props){
     super(props);
     document.title = 'Home';
     this.state = {
        inputEmail: 'muttonblue@gmail.com',
        inputPassword : '12345678',
        ajaxText : ''
      };

      // this.testState = this.testState.bind(this)
  }

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('Home', className)} {...props}>
      {/* <Header actionName="Home"  /> */}
      <div className="page-content-wrapper">
        <h1>Welcome to Herapp</h1>
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Heraapp</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/Home.js</code> and save to reload.
          </p>
          <Button> Click Here </Button>
          <Button>Default</Button>
      </div>
      {/* <Footer/> */}
      </div>
    );
  }
}

export default Home;
