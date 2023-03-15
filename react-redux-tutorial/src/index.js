import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import rootReducer from './modules';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

const root = document.getElementById('root');
ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  root
);


