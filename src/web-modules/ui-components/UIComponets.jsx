import React, {Component} from 'react';
import classnames from 'classnames';
import { Header, Footer } from './../layout';

export default class UIComponets extends Component {
  static propTypes = {}
  static defaultProps = {}
  state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('UIComponets', className)} {...props}>
        <Header actionName="UI Components"  />
        <div className="page-content-wrapper">
          <h1>UI Components</h1>
            <p className="App-intro">
              To get started, edit <code>src/UI Components.js</code> and save to reload.
            </p>
        </div>
        <Footer/>
      </div>
    );
  }
}
