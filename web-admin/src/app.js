import React, { Component } from 'react';
import './base.less';
import { BrowserRouter,Switch, Route, browserHistory } from 'react-router-dom';
import LoginView from './view/login/index.js';
import HomeView from './view/home/index.js';
export default class App extends React.Component {

    render() {
        return (
            <BrowserRouter history={browserHistory}>
                <Switch>
                    <Route path="/login" component={LoginView} />
                    <Route exact component={HomeView} />
                </Switch>
            </BrowserRouter>
        );
    }
}