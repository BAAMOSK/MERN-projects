import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//IMPORTS FOR CHECK FOR AUTH HEADER
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser } from './actions/authActions';
import { logoutUser } from './actions/authActions';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [ thunk, logger ];

const store = createStore(
        rootReducer,
        {},
        composeEnhancers(applyMiddleware(...middlewares))
);

//CHECK FOR AUTH HEADER
if(localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decoded = jwt_decode(localStorage.jwtToken);
    store.dispatch(setCurrentUser(decoded));

    //AUTOMATICALLY LOGOUT AFTER AUTH EXPIRATION
    /*const currentTime = Date.now() / 1000;
    if(decoded.exp < currentTime) {
        store.dispatch(logoutUser());
        window.location.href = '/login';
    }*/
}

const provider = <Provider store={store}><App/></Provider>;

ReactDOM.render(provider, document.getElementById('root'));
registerServiceWorker();
