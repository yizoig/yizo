import React from 'react';
import {Redirect, Route as ReactRoute, withRouter,Switch,BrowserRouter,browserHistory } from 'react-router-dom';
export let ProtectedRoute = ({ component: Component, ...props }) => {
    let login = false;
    return login ? (
        <Component {...props} />
    ) : (
            <Redirect to={{
                path: '/login'
            }} />
        )
}
export let Route = ({ component: Component, ...props }) => <ReactRoute component={withRouter(Component)} {...props} />
export {
    browserHistory,Redirect,withRouter,Switch,BrowserRouter
}