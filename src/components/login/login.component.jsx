import './login.less';
import React, { Component, PropTypes } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

// <div style={{width:'100px',height:'100px'}}></div>
const Login = ({}) => {
	return (
		<div>
			<header>
				<h3>login</h3>
			</header>
			<main>
				<section className="login-img">
					<img src={require("./images/webfirewall.jpg")}/>
				</section>
				<section className="login-dialog">
					<button><Link to="/home">登录</Link></button>
				</section>
			</main>
		</div>
	)
};
export default Login;
