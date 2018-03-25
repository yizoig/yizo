import { combineReducers } from 'redux';
import signReducers from './signIn';
import homeReducers from './home';
import { routerReducer } from 'react-router-redux'
export default combineReducers({
    sign:signReducers,
    home:homeReducers,
    routing: routerReducer
})