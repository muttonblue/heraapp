// import React, { Component } from 'react'
import * as React from "react";
import { connect } from "react-redux";
import * as ReactDOM from "react-dom";
import { Button as Button3 } from "reactstrap";
import { Fabric } from "office-ui-fabric-react/lib/Fabric";
import {
  Button as ButtonOffice,
  ButtonType
} from "office-ui-fabric-react/lib/Button";
import {
  Dialog,
  DialogType,
  DialogFooter
} from "office-ui-fabric-react/lib/Dialog";
import Button from "material-ui/Button";
import TextField from "material-ui/TextField";
import { initializeIcons } from "@uifabric/icons";
import styles from "./Home.scss";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      texts: "ccc"
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.texts !== nextState.texts;
  }
  componentDidUpdate() {}

  open = () => this.setState({ isOpen: true });

  close = () => this.setState({ isOpen: false });

  testPerf() {
    event.preventDefault();
    this.setState({ isOpen: true, texts: "rrrrr" });
  }
  officeFabric() {
    initializeIcons("https://my.cdn.com/path/to/icons/");
    return (
      <Fabric className="App">
        <div style={{ margin: "5em" }}>
          <ButtonOffice onClick={this.open}>I am a button.</ButtonOffice>
        </div>
        <Dialog
          isOpen={this.state.isOpen}
          type={DialogType.close}
          onDismiss={this.close.bind(this)}
          title="Dialog title"
          subText="Dialog subText"
          isBlocking={false}
          closeButtonAriaLabel="Close"
        >
          <h1>Hello, World!</h1>
          <DialogFooter>
            <ButtonOffice buttonType={ButtonType.primary} onClick={this.close}>
              OK
            </ButtonOffice>
          </DialogFooter>
        </Dialog>
      </Fabric>
    );
  }

  render() {
    return (
      <div>
        {/* {this.officeFabric()} */}
        <div>
          <Button3 color="danger">Danger!</Button3>
        </div>
        <div>
          <Button3 color="info">reactstrap</Button3>{" "}
        </div>
        <div>
          <Button
            variant="raised"
            color="primary"
            onClick={this.testPerf.bind(this)}
          >
            Hello World
          </Button>
        </div>
      </div>

      // <h2 className={styles['title']}>
      //   Welcome to Genesis!
      // </h2>
    );
  }
}

// export default Home;

function mapStateToProps(state, ownProps) {
  return {
    login: state.login,
    isLoggedIn: state.login.isLogin,
    currentURL: ownProps.location.pathname
  };
}

export default connect(mapStateToProps, null)(Home);
