import React from 'react';
import {Redirect, Route, withRouter,Switch,BrowserRouter,browserHistory,Router } from 'react-router-dom';
import cache from '../../../lib/cache'
export let ProtectedRoute = ({ component: Component, ...props }) => {
    let login = cache.local.getItem("access-token");
    return login ? (
        <Component {...props} />
    ) : (
            <Redirect to={'/signIn'} />
        )
}
export {
    browserHistory,Redirect,withRouter,Switch,BrowserRouter,Router,Route
}