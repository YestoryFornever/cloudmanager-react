import './login.less';
import React, { Component, PropTypes } from 'react';
import { Route, Link } from 'react-router-dom';

// <div style={{width:'100px',height:'100px'}}></div>
const Login = ({ onLogin, onLogout, authenticated}) => {
	return (
		<div>
			<header>
				<h3>login</h3>
			</header>
			<main>
				<section className="login-img">
					{/* <img src={require("./images/webfirewall.jpg")}/> */}
				</section>
				<section className="login-dialog">
					<button onClick={e=>{
						e.preventDefault();
						onLogin(true);}
					}>登录</button>
					{authenticated&&(<span>asdf</span>)}
					<button>
						<Link to="/error">错误</Link>
					</button>
				</section>
			</main>
		</div>
	)
};
export default Login;
