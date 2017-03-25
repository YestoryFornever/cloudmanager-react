import './index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import SubMessage from './component';

class Hello extends React.Component{
	constructor(){
		super();
		this.state = {
			isVisible:true,
			titleMessage:'世界你好！'
		};
	}
	render(){
		return (<div>
			<h1>{this.state.titleMessage+this.props.name+this.props.class}</h1>
			<SubMessage abc="a"/>
			<SubMessage abc="b"/>
			<SubMessage abc="c"/>
		</div>);
	}
};

ReactDOM.render(<Hello name="xxx" class="yyy"/>,document.getElementById('app'),()=>{
	console.log('渲染完成了！');
});