import React from 'react';
import {render} from 'react-dom';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger'

import rootReducer from './index.reducer.jsx';

import App from './app/app.container.jsx';

import './scss/app.scss';


const loggerMiddleware = createLogger()

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
    )
  );

render(
  <Provider store={store}>
    <App />
  </Provider>
    , document.getElementById('app'));