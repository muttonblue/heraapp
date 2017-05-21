import React, {Component} from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  FormGroup,
  FormControl,
  Button
} from 'react-bootstrap';
import logo from './logo.svg';

const navbar = {
  backgroundColor: '#205081 !important'
};

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Muttonblue",
      count: 0
    };

    this.redirctPages = this.redirctPages.bind(this);
  }

  redirctPages(event, ...props) { 
    window.location = "http://localhost:3000/login";
  }

  render() {
    return (
      <Navbar fixedTop="true">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Heraapp</a>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="/heraapp/home" onClick={() => { console.log(11); }}>Home</NavItem>
            <NavItem eventKey={2} href="/heraapp/medical-record">งานเวชทะเบียน</NavItem>
          <NavItem eventKey={2} href="/heraapp/administator">Administator</NavItem>
            <NavDropdown eventKey={3} title="Components" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1} href="/heraapp/database">Database</MenuItem>
              <MenuItem eventKey={3.2} href="/heraapp/uicomponents">UI Components</MenuItem>
              <MenuItem eventKey={3.3} href="/heraapp/mockup">Mockup</MenuItem>
              <MenuItem eventKey={3.4} href="/heraapp/about">About</MenuItem>
              <MenuItem divider/>
            <MenuItem eventKey={3.5} href="/heraapp/login">Logout</MenuItem>
            </NavDropdown>
          </Nav>
          { /* <Nav pullRight>
            <FormGroup>
              <FormControl type="text" bsSize="xsmall" placeholder="Search"/>
            </FormGroup>
            <Button bsStyle="primary" bsSize="xsmall" type="submit">Submit</Button>
          </Nav> */}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
