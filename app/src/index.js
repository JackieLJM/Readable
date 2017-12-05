import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import configureStore from './store/configureStore.js';
import sagas from 'sagas';

const store = configureStore();
store.runSaga(sagas);
ReactDOM.hydrate(
<Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));
registerServiceWorker();
