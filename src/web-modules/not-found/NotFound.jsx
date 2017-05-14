import React, { Component } from 'react';
import classnames from 'classnames';
import { Jumbotron, Button} from 'react-bootstrap';
import './style.css';

const redirctLogin = function(event){
    window.location = "http://localhost:3000/login";
}

const jumbotronInstance = (
 <Jumbotron>
  <div >
    <h1>404 00<small>Not Found :(</small></h1>
    <p></p>
  <p><Button bsStyle="primary" onClick={redirctLogin}>กลับไปหน้าหลัก</Button></p>
  </div>
  </Jumbotron>
);

export default class NotFound extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}
  render() {
    const { className, ...props } = this.props;
    return (
      <div id='contraner' className={classnames('NotFound', className)} {...props}> 
        {jumbotronInstance}
      </div>
    );
  }
}
