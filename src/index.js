import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';

import App from './components/App/App';
import store from './store/store';

import './index.scss';
// import AuthContextProvider from './context/auth-context';

const insertRoot = () => {
  const root = document.createElement('div');

  root.setAttribute('id', 'root');
  document.body.appendChild(root);

  return root;
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  insertRoot(),
);
