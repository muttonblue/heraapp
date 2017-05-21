import React, {Component} from 'react';
import classnames from 'classnames';
import { Header, Footer } from './../layout';

export default class Database extends Component {
  static propTypes = {}
  static defaultProps = {}
  state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('Database', className)} {...props}>
        <Header actionName="Database"  />
        <div className="page-content-wrapper">
          <h1>Database</h1>
            <p className="App-intro">
              To get started, edit <code>src/Database.js</code> and save to reload.
            </p>
        </div>
        <Footer/>
      </div>
    );
  }
}
