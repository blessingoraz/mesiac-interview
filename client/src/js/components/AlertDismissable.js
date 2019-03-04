import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';
import PropTypes from 'prop-types';

// Import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';


class AlertDismissable extends Component {
  render() {
    const {
      message,
      color
    } = this.props;

    return (
      <Alert dismissible variant={color || 'success'}>
        <p>{message}</p>
      </Alert>
    );
  }
}

AlertDismissable.defaultProps = {
  callback: undefined
};

AlertDismissable.propTypes = {
  message: PropTypes.string.isRequired,
  color: PropTypes.string
};

export default AlertDismissable;
