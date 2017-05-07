import React, { Component, PropTypes } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const Login = ({}) => {
	return (
		<div>
			<h3>login</h3>
			<button><Link to="/home">登录</Link></button>
		</div>
	)
};
export default Login;
