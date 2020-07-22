import App from './app/App';
import React from 'react';
import ReactDOM from 'react-dom';
import './app/style/tailwind.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './app/reducers/rootReducer';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('index'),
);
