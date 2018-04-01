import { combineReducers } from 'redux';
import signReducers from './signIn';
import homeReducers from './home';
import adminGroupReducers from './adminGroup';
import adminReducers from './admin';
import collegeReducers from './college';
import userReducers from './user';
import taskTypeReducers from './taskType';
import goodTypeReducers from './goodType';
import { routerReducer } from 'react-router-redux'
export default combineReducers({
    sign:signReducers,
    home:homeReducers,
    routing: routerReducer,
    adminGroup:adminGroupReducers,
    admin:adminReducers,
    college:collegeReducers,
    user:userReducers,
    taskType:taskTypeReducers,
    goodType:goodTypeReducers
})