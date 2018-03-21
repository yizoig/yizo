
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

import React from "react";
import ReactDom from "react-dom";
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './redux/reducers';
import SignIn from './containers/signIn/index.js';
import Home from './containers/home/index.js';
import { Router, Switch, Route } from './common/Route/index.js';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import thunkMiddleware from 'redux-thunk';
const browserHistory = createBrowserHistory();
const DevTools = createDevTools(
    <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
        <LogMonitor theme="tomorrow" preserveScrollTop={false} />
    </DockMonitor>
)
const store = createStore(reducers,
    compose(
        applyMiddleware(routerMiddleware(browserHistory)),
        applyMiddleware(thunkMiddleware),
        DevTools.instrument()
    )
);
const history = syncHistoryWithStore(browserHistory, store)
const render = () => ReactDom.render(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route path="/signIn" component={SignIn} />
                <Route exact component={Home} />
            </Switch>
        </Router>
    </Provider>,
    document.querySelector("#app"));

render();
store.subscribe(render);