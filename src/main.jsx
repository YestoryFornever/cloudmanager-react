import './index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import SubMessage from './component';

class Hello extends React.Component{
	clickMe(){
		alert('你刚才点击了我！！');
	}
	render(){
		let submessages = [];
		for (let i = 0; i < 10; i++) {
			submessages.push(<SubMessage key={i}/>);
		}
		return (<div>
			<h1 onClick={this.clickMe}>Hello</h1>
			{submessages}
		</div>);
	}
};

ReactDOM.render(<Hello/>,document.getElementById('app'),()=>{
	console.log('渲染完成了！');
});