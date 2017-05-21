import React, {Component} from 'react';
import classnames from 'classnames';
import { Header, Footer } from './../layout';

export default class MedicalRecord extends Component {
  static propTypes = {}
  static defaultProps = {}
  state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('MedicalRecord', className)} {...props}>
        <Header actionName="Medical Record"  />
        <div className="page-content-wrapper">
          <h1>UI Components</h1>
            <p className="App-intro">
              To get started, edit <code>src/MedicalRecord.js</code> and save to reload.
            </p>
        </div>
        <Footer/>
      </div>
    );
  }
}
