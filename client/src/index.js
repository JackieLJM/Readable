import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import configureStore from './configureStore.js';
import sagas from 'sagas';

const store = configureStore();
store.runSaga(sagas);
ReactDOM.render(
<Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));
registerServiceWorker();
