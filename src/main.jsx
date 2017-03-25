import './index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import SubMessage from './component';

class Hello extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			messages:[
				'你好！',
				'谢谢！',
				'再见！'
			],
			num:0
		};
		this.countNum = this.countNum.bind(this);
	}
	countNum(e){
		this.setState({
			num:++this.state.num
		});
		console.log(e);//被react封装的event
		console.log(e.nativeEvent);//原本的event
	}
	render(){
		return (<div>
			<button onClick={this.countNum}>count</button>
			<p>{this.state.num}</p>
			<SubMessage messages={this.state.messages}/>
		</div>);
	}
};

ReactDOM.render(<Hello/>,document.getElementById('app'),()=>{
	console.log('渲染完成了！');
});
