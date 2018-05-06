import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import { connect } from "react-redux";
import { Link } from "react-router";
import styles from "./Header.scss";

const MODULE_NAME = "heraapp";

const links = [
  { pathname: `/${MODULE_NAME}/users`, name: "Users" },
  { pathname: `/${MODULE_NAME}/pages`, name: "Users" },
  { pathname: `/${MODULE_NAME}/OfficeDev`, name: "OfficeDev" },
  { pathname: `/${MODULE_NAME}/MaterialUI`, name: "MaterialUI" },
  { pathname: `/${MODULE_NAME}/Reactstrap`, name: "reactstrap" },
  { pathname: `/${MODULE_NAME}/SemanticUI`, name: "SemanticUI" }
];
// this.props.router.push('/heraapp/users')
class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }



  renderNavbarBrand() {
    const { login } = this.props;
    return (
      (login.isLogin && (
        <NavbarBrand className="" href="/">
          HERA@v.0.0.1
        </NavbarBrand>
      )) ||
      null
    );
  }

  renderNavItem() {
    const { login , history} = this.props;
    return (
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="https://github.com/muttonblue/heraapp.git">
            GitHub
          </NavLink>
        </NavItem>
        {links.map((item,index) => {
          return (
            <NavItem key={index}>
              <NavLink href="#" onClick={() => this.props.router.push(item.pathname)}>
                {item.name} 
              </NavLink>
            </NavItem>
          );
        })}
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Options
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>Option 1</DropdownItem>
            <DropdownItem>Option 2</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Reset</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    );
  }

  render() {
    const { login , history, router} = this.props;
    return (
      <div>
        <Navbar light expand="md">
          {this.renderNavbarBrand()}
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {this.renderNavItem()}
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  login: state.login
});

const mapDispatchToProps = dispatch => ({
  onInit: () => console.log("xxx")
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
