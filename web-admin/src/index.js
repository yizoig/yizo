//redux devtool
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'
import React from "react";
import ReactDom from "react-dom";
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
//all  reducers
import reducers from './redux/reducers';
import SignIn from './containers/signIn/index.js';
import Main from './containers/main/index.js';
import { Router, Switch, Route,ProtectedRoute } from './components/common/Route/index';
import { syncHistoryWithStore, routerMiddleware, ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory'
import thunkMiddleware from 'redux-thunk';
import persistState from 'redux-localstorage'


const browserHistory = createHistory();
const DevTools = createDevTools(
    <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
        <LogMonitor theme="tomorrow" preserveScrollTop={false} />
    </DockMonitor>
)

const store = createStore(reducers,
    compose(
        applyMiddleware(thunkMiddleware),
        applyMiddleware(routerMiddleware(browserHistory)),
        // persistState(['home'], {
        //     merge: function (stateInit, preState) {
        //         return preState
        //     },
        //     slicer: function (paths) {
        //         return (state) => {
        //             let subset = {}
        //             // paths.forEach((path) => {
        //             //       subset[path] = state[path]
        //             // });
        //             return state
        //         }
        //     }, serialize: function (subset) {
        //         return JSON.stringify(subset)
        //     }
        // }),
        DevTools.instrument()
    )
);
const render = () => ReactDom.render(
    <Provider store={store}>
        <ConnectedRouter history={browserHistory}>
            <div>
                <Route path="/signIn" component={SignIn}/>
                <ProtectedRoute exact component={Main} />
            </div>
        </ConnectedRouter>
    </Provider>,
    document.querySelector("#app")
);

render();
store.subscribe(render);