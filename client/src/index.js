import './css/main.css';

// Import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './js/config/store';

import App from './js/components/App';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);