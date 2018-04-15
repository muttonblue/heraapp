import React, { Component } from "react";
import * as ReactDOM from "react-dom";
import { Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

class SemanticUIView extends Component {
  render() {
    return (
      <div>
        <Button>Click Here</Button>
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
      </div>
    );
  }
}

export default SemanticUIView;
