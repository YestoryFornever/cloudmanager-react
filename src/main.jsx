import './index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import SubMessage from './component';

class Hello extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			isVisible:true,
			titleMessage:'世界你好！',
			curTime:new Date()
		};
	}
	componentDidMount(){
		this.timerId = setInterval(()=>{
			this.tick();
		},1000);
	}
	componentWillMount(){
		clearInterval(this.timerId);
	}
	render(){
		return (<div>
			<h1>{this.state.titleMessage}</h1>
			<h2>It is {this.state.curTime.toLocaleTimeString()}.</h2>
			<SubMessage abc="a"/>
			<SubMessage abc="b"/>
			<SubMessage abc="c"/>
		</div>);
	}
	tick(){
		this.setState({
			curTime:new Date()
		});
	}
};

ReactDOM.render(<Hello/>,document.getElementById('app'),()=>{
	console.log('渲染完成了！');
});
