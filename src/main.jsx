import './index.less';
import $ from 'jquery';
import React from 'react';
import ReactDOM,{ render } from 'react-dom';

import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import fnReducers from './reducers';
const history = createBrowserHistory()
const middleware = routerMiddleware(history);
let store = createStore(fnReducers, applyMiddleware(middleware));

import App from './app.component';//<App />

render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('app')
);

// redux-thunk - 实现异步action （ajax）
// redux-gen - 生成器
// react-router-redux - 路由
// react-redux-form - 表单提交