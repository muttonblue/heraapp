import React, { Component } from 'react';
import classnames from 'classnames';
import { Jumbotron, Button} from 'react-bootstrap';

const comp = (
  <Jumbotron>
    <h1>404 <small>Not Found :(</small></h1>
    <p></p>
    <p><Button bsStyle="primary">ไปหน้า login</Button></p>
  </Jumbotron>

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
        <p>{this.state.name} : {this.state.count + 1} </p>
        {comp}
      </div>
    );
  }
} 
