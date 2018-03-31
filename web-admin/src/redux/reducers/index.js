import { combineReducers } from 'redux';
import signReducers from './signIn';
import homeReducers from './home';
import adminGroupReducers from './adminGroup';
import adminReducers from './admin';
import collegeReducers from './college';
import userReducers from './user';
import { routerReducer } from 'react-router-redux'
export default combineReducers({
    sign:signReducers,
    home:homeReducers,
    routing: routerReducer,
    adminGroup:adminGroupReducers,
    admin:adminReducers,
    college:collegeReducers,
    user:userReducers
})