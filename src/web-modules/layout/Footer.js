import React, {Component} from 'react';

export default class Footer extends Component {
  constructor(){
    super();
    this.state = {
      name: "Muttonblue",
      count: 0,
      version :"0.0.1"
    };
  }

  render() {
    return (
        <footer className="footer">
          <div className="footer-container">
            <p> Herapp Mockup v. {this.state.version}</p>
            <p> {this.state.name} : {this.state.count} </p>
          </div>
        </footer>

    );
  }
}
