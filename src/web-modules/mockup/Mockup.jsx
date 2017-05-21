import React, {Component} from 'react';
import classnames from 'classnames';
import { Header, Footer } from './../layout';

export default class Mockup extends Component {
  static propTypes = {}
  static defaultProps = {}
  state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('Mockup', className)} {...props}>
        <Header actionName="Mockup"  />
        <div className="page-content-wrapper">
          <h1>UI Components</h1>
            <p className="App-intro">
              To get started, edit <code>src/Mockup.js</code> and save to reload.
            </p>
        </div>
        <Footer/>
      </div>
    );
  }
}
