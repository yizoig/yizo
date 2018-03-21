import React from 'react';
import {Redirect, Route, withRouter,Switch,BrowserRouter,browserHistory,Router } from 'react-router-dom';
// export let ProtectedRoute = ({ component: Component, ...props }) => {
//     let login = false;
//     return login ? (
//         <Component {...props} />
//     ) : (
//             <Redirect to={{
//                 path: '/login'
//             }} />
//         )
// }
export {
    browserHistory,Redirect,withRouter,Switch,BrowserRouter,Router,Route
}