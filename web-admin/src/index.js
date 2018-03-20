import React from "react";
import ReactDom from "react-dom";
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './redux/reducers';
import Login from './views/login/index.js';
import Home from './views/home/index.js';
import { BrowserRouter, Switch, Route, browserHistory } from './common/Route/index.js';

const store = createStore(reducers);
const render = () => ReactDom.render(
    <Provider store={store}>
        <BrowserRouter history={browserHistory}>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route exact component={Home} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.querySelector("#app"));

render();
// store.subscribe(render);