import React, { Component } from "react";
import * as ReactDOM from "react-dom";
import { Jumbotron, Button } from "reactstrap";
// import Styles from "./ReactstrapStyle";

class ReactstrapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  render() {
    return (
      <div>
      <label>>> :: {JSON.stringify(this.props.login)}</label>
        <Jumbotron>
          <h1 className="display-3">Hello, world!</h1>
          <p className="lead">
            This is a simple hero unit, a simple Jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr className="my-2" />
          <p>
            It uses utility classes for typgraphy and spacing to space content
            out within the larger container.
          </p>
          <p className="lead">
            <Button color="primary">Learn More</Button>
          </p>
        </Jumbotron>
      </div>
    );
  }
}

export default ReactstrapView;
