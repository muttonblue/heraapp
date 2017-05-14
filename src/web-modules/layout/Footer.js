import React, {Component} from 'react';

export default class Footer extends Component {
  constructor(){
    super();
    this.state = {
      name: "Muttonblue",
      count: 0
    };
  }

  render() {
    return (
      <div>
        <p> +++++++++ Footer Header+++++++++++ </p>
        <p> {this.state.name} : {this.state.count} </p>
      </div>
    );
  }
}
