import React, {PropTypes, Component} from 'react';
import classnames from 'classnames';
import { Button, ButtonToolbar } from 'react-bootstrap';
import './style.css';

export default class UIComponent extends Component {
  static propTypes = {}
  static defaultProps = {}
  state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('UIComponent', className)} {...props}>
        <ButtonToolbar>
          {/* Standard button */}
          <Button>Default</Button>

          {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
          <Button bsStyle="primary">Primary</Button>

          {/* Indicates a successful or positive action */}
          <Button bsStyle="success">Success</Button>

          {/* Contextual button for informational alert messages */}
          <Button bsStyle="info">Info</Button>

          {/* Indicates caution should be taken with this action */}
          <Button bsStyle="warning">Warning</Button>

          {/* Indicates a dangerous or potentially negative action */}
          <Button bsStyle="danger">Danger</Button>

          {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
          <Button bsStyle="link">Link</Button>
        </ButtonToolbar>
      </div>
    );
  }
}