import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import reducer from './reducers';

const store = createStore(reducer, undefined, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f            
));

const state = <Provider store={store}><App /></Provider>;

ReactDOM.render(state, document.getElementById('root'));
registerServiceWorker();
