import React, { Component } from 'react';
// import classnames from 'classnames';
import { Navbar,FormGroup,FormControl, Button} from 'react-bootstrap';

const navbarInstance = (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Brand</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Navbar.Form pullLeft>
        <FormGroup>
          <FormControl type="text" placeholder="Search" />
        </FormGroup>
        {' '}
        <Button type="submit">Submit</Button>
      </Navbar.Form>
    </Navbar.Collapse>
  </Navbar>
);

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      name: "Muttonblue",
      count: 0
    };
  }

  render() {
    return (
      <div className="Header">
        {navbarInstance}
      </div>
    );
  }
}
