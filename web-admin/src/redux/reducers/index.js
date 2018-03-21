import { combineReducers } from 'redux';
import signReducers from './signIn';
import { routerReducer } from 'react-router-redux'
export default combineReducers({
    sign:signReducers,
    routing: routerReducer
})