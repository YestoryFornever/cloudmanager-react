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
			titleMessage:'世界你好！'
		};
	}
	render(){
		return (<div>
			<h1>{this.state.titleMessage+this.props.name+this.props.class}</h1>
			<h2>It is {this.props.curTime.toLocaleTimeString()}.</h2>
			<SubMessage abc="a"/>
			<SubMessage abc="b"/>
			<SubMessage abc="c"/>
		</div>);
	}
};

setInterval(()=>{
	ReactDOM.render(<Hello name="xxx" class="yyy" curTime={new Date()}/>,document.getElementById('app'),()=>{
		console.log('渲染完成了！');
	});
},1000);
