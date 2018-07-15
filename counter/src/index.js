import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers';

const store = createStore(reducer);
const provider = <Provider store={store}><App /></Provider>;

ReactDOM.render(provider, document.getElementById('root'));
registerServiceWorker();
