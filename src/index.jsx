import './index.less';
/* 
 * jquery
 */
import $ from 'jquery';
/*
 * React 
 */
import React, { Component, PropTypes } from 'react';
import ReactDOM,{ render } from 'react-dom';
/*
 * Redux
 */
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
/*
 * Router
 */
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router1, Route, Link } from 'react-router-dom';
import { ConnectedRouter as Router, routerMiddleware, push } from 'react-router-redux';
/*
 * Components
 */
import Login from './components/login/login.container';
import Home from './components/home/home.container';
import Error from './components/error/error.container';

const history = createBrowserHistory();

import fnReducers from './reducers';
const middleware = routerMiddleware(history);
let store = createStore(fnReducers, applyMiddleware(middleware));

render(
	<Provider store={store}>
		<div className="Provider">
			<Router history={history}>
				<div className="Router">
					<ul>
						<li><Link to="/">Login</Link></li>
						<li><Link to="/home">Home</Link></li>
						<li><Link to="/error">Error</Link></li>
					</ul>
					<hr />
					<Route exact path="/" component={Login} />
					<Route path="/home" component={Home} />
					<Route path="/error" component={Error} />
				</div>
			</Router>
		</div>
	</Provider>,
	document.getElementById('app')
);

// redux-thunk - 实现异步action （ajax）
// redux-gen - 生成器
// react-router-redux - 路由
// react-redux-form - 表单提交