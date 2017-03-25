import './index.less';
import React from 'react';
import ReactDOM from 'react-dom';

class Footer extends React.Component{
	render(){
		return (<small>i'm small</small>);
	}
}

export default class SubMessage extends React.Component{
	render(){
		return <div><h2>world</h2><Footer/></div>
	}
}