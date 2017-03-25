import './index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Hello extends React.Component{
	clickMe(){
		alert('你刚才点击了我！！');
	}
	render(){
		return <h1 onClick={this.clickMe}>Hello</h1>
	}
};

ReactDOM.render(<Hello/>,document.getElementById('app'),()=>{
	console.log('渲染完成了！');;
});