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
		return (<div>
			<h1 onClick={this.clickMe}>{this.props.name+this.props.class}</h1>
			<SubMessage abc="a"/>
			<SubMessage abc="b"/>
			<SubMessage abc="c"/>
		</div>);
	}
};

ReactDOM.render(<Hello name="xxx" class="yyy"/>,document.getElementById('app'),()=>{
	console.log('渲染完成了！');
});