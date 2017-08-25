import './index.less';
import $ from 'jquery';
import React from 'react';
import ReactDOM,{ render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import fnReducers from './reducers';
let store = createStore(fnReducers);

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