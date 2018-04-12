import {combineReducers} from 'redux';
import authentication from './authentication';
import user from './user';
import {routerReducer} from 'react-router-redux';

export default combineReducers({
    authentication,
    user,
    routing:routerReducer
});