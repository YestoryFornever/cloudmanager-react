import './index.less';
import $ from 'jquery';
import React from 'react';
import ReactDOM,{ render } from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './containers/app'
import todoApp from './reducers'

let store = createStore(todoApp)

let rootElement = document.getElementById('app')
render(
	<Provider store={store}>
		<App />
	</Provider>,
	rootElement
);