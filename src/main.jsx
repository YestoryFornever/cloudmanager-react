import './index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import SubMessage from './component';

class Hello extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			inputValue:'input value...',
			selectValue:'1',
			radioValue:'',
			checkboxValue:[],
			textareaValue:'textarea value...',
			countNum:0
		};
		console.log('init');
	}
	componentWillMount(){
		console.log('willmount');
	}
	componentDidMount(){
		console.log('didmount');
		this.xxx = setInterval(()=>{
			this.setState({
				countNum:this.state.countNum+1
			});
		},1000);
	}
	componentWillUnmount(){
		console.log('willunmount');
		clearInterval(this.xxx);
	}
	kill(){
		ReactDOM.unmountComponentAtNode(document.getElementById('app'));
	}
	render(){
		return (<div>
			{this.state.countNum}
			<button onClick={this.kill}>test</button>
			<SubMessage ref='refSubmsg'/>
		</div>);
	}
};

ReactDOM.render(<Hello/>,document.getElementById('app'),()=>{
	console.log('渲染完成了！');
});
