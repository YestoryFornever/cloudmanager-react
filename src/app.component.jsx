import React, { Component, PropTypes } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Login from './login/login.container';
import Home from './home/home.container';
import Error from './error/error.container';

const App = ({}) => {
	return (
		<div>
			<BrowserRouter>
				<div>
					<Route exact path="/" component={Login}/>
					<Route path="/home" component={Home}/>
					<Route path="/error" component={Error}/>
				</div>
			</BrowserRouter>
		</div>
	)
};
export default App;

/*<ul>
	<li><Link to="/">Login</Link></li>
	<li><Link to="/home">Home</Link></li>
	<li><Link to="/error">Error</Link></li>
</ul>
<hr/>*/