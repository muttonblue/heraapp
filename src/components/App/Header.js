import React, { Component } from "react";
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

class Header extends Component {
  componentWillMount() {}

  renderMenu() {
    const { login } = this.props;
    return (
      <ul className={styles["menu"]}>
        {links.map(item => {
          return (
            <li className={styles["menu__item"]}>
              <Link to={{ pathname: item.pathname }} className={styles["menu__link"]}>
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
  
  render() {
    const { login } = this.props;
    return (
      <header className={styles["header"]}>
        <nav>
          <Link to={{ pathname: "/" }} className={styles["brand"]}>
            Heraapp
          </Link>
          {login.isLogin && this.renderMenu()}
        </nav>
      </header>
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
