import React from 'react';
import ReactDOM from 'react-dom';
import JavascriptTimeAgo from 'javascript-time-ago';

import pt from 'javascript-time-ago/locale/pt';
import en from 'javascript-time-ago/locale/en';

import './index.css';
import App from './App';

import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import repositoriesReducer from "./store/repositoriesReducer";

JavascriptTimeAgo.addLocale(pt);
JavascriptTimeAgo.addLocale(en);

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  combineReducers({ repositoriesReducer }),
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);