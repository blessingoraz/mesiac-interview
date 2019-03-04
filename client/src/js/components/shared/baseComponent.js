/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import Spinner from 'react-spinkit';
import AlertDismissable from '../AlertDismissable';
// import { store } from '../../store';

const maxAlertDuration = 10000; // In milliseconds
const COLOR = {
  danger: 'danger',
  success: 'success'
};

export class BaseComponent extends Component {
  constructor () {
    super();
    this.state = {
      message: null,
      errorMessage: null,
      statusCode: null,
      errorCode: null,
      showAlert: false
    };
  }

  toggleShowAlert = (showAlert) => {
    this.setState({
      showAlert
    });
  }

  clearAlerts = () => {
    this.setState({
      message: null,
      errorMessage: null,
      statusCode: null,
      errorCode: null,
      showAlert: false
    });
  }

  handleCancelAlert = (errorCode) => {
    console.log('errorCode ===', errorCode);
    // if (errorCode === 401) {
    //   return store.dispatch(pageActions.redirectToRoot())
    // }
    this.clearAlerts();
  }

  loadingSpinner = () => {
    return (
      <Spinner
        name='circle'
        color='#F51796'
        className='spinner'
      />
    );
  }

  autoCancelAlert = () => {
    return setTimeout(() => {
      if (this.state.showAlert) {
        this.clearAlerts();
      }
    }, maxAlertDuration);
  }

  displayAlert (message, code) {
    this.autoCancelAlert(); // Trigger timer for auto cancelling of alert
    const color = (code === 'Success' ? COLOR.GREEN : COLOR.YELLOW);
    return (
      <AlertDismissable
        message={message}
        handleCancelAlert={() => this.handleCancelAlert(code)}
        color={color}
      />
    );
  }
}
