import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';
import PropTypes from 'prop-types';

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

AlertDismissable.propTypes = {
  message: PropTypes.string.isRequired,
  color: PropTypes.string
};

export default AlertDismissable;
