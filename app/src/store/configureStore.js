import {createStore,applyMiddleware,compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducers from './reducers';

const sagaMiddleware=createSagaMiddleware();
export default function configureStore(initialState){
    return {
        ...createStore(rootReducers,initialState,applyMiddleware(sagaMiddleware)),
        runSaga:sagaMiddleware.run()
    }
}