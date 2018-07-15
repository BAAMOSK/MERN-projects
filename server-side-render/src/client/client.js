import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import axios from 'axios';
import Routes from './Routes';
import reducers from './reducers';

const axiosInstance = axios.create({
    baseURL: '/api'
});

//CLIENT INDEX.JS
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [thunk.withExtraArgument(axiosInstance)];
const store = createStore(
    reducers,
    window.INITIAL_STATE,
    composeEnhancers(applyMiddleware(...middlewares))
);

const App = <Provider store={store}><BrowserRouter><div>{renderRoutes(Routes)}</div></BrowserRouter></Provider>;

ReactDOM.hydrate(App, document.querySelector('#root'));
