import './index.less';
import $ from 'jquery';
import React from 'react';
import ReactDOM,{ render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const customHistory = createBrowserHistory();

import fnReducers from './reducers';
let store = createStore(fnReducers);

import App from './containers/app';//<App />
import Hello from './components/hello';
import About from './components/about';
import Repos from './components/repos';
render(
	<Provider store={store}>
		<div>
			<App/>
			<BrowserRouter history={ customHistory }>
				<div>
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/repos">Repos</Link></li>
						<li><Link to="/about">About</Link></li>
					</ul>

					<hr/>
					<Route exact path="/" component={Hello}/>
					<Route path="/repos" component={Repos}/>
					<Route path="/about" component={About}/>
				</div>
			</BrowserRouter>
		</div>
	</Provider>,
	document.getElementById('app')
);