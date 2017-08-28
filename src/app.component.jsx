import React, { Component, PropTypes } from 'react';
import { BrowserRouter as Router1, Route, Link } from 'react-router-dom';
import { ConnectedRouter as Router, push } from 'react-router-redux';
import { createBrowserHistory } from 'history';

import Login from './components/login/login.container';
import Home from './components/home/home.container';
import Error from './components/error/error.container';

const history = createBrowserHistory()

const App = ({}) => {
	return (
		<div>
			<Router history={history}>
				<div className="Router">
					<ul>
						<li><Link to="/">Login</Link></li>
						<li><Link to="/home">Home</Link></li>
						<li><Link to="/error">Error</Link></li>
					</ul>
					<hr />
					<Route exact path="/" component={Login}/>
					<Route path="/home" component={Home}/>
					<Route path="/error" component={Error}/>
				</div>
			</Router>
		</div>
	)
};
export default App;

