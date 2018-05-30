// REACT
import React from 'react';
import ReactDOM from 'react-dom';

// REDUX
import { Provider } from 'react-redux';
import store from './store';

// CSS
import 'bulma/css/bulma.min.css'
import './css/main.css';

// COMPONENTS
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// ==========

const storeInstance = store();

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
