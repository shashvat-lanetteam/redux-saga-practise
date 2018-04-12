import {applyMiddleware, createStore, compose} from 'redux';
import rootReducer from './reducers';
import {routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';
import mysaga from './actionMethods/sagas';

const sagaMiddleware = createSagaMiddleware();


export const history = createHistory();
const middleware = [sagaMiddleware,routerMiddleware(history)];

const store = createStore(
    rootReducer,
    compose(applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
);
sagaMiddleware.run(mysaga);


export default store;
