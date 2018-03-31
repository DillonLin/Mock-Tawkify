import "babel-polyfill";
import './stylesheets/main.scss';
import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from 'react-hot-loader';

import App from './App';

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('app'));


// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
  	const NextApp = require('./App').default;
    render(NextApp)
  })
};
