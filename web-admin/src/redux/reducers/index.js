import { combineReducers } from 'redux';
import loginReducers from './login';
import { routerReducer } from 'react-router-redux'
export default combineReducers({
    loginReducers,
    routing: routerReducer
})