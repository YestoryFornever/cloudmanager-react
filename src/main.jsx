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