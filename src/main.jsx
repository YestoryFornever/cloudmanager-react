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
		};
	}
	render(){
		return (<div>
			<SubMessage messages={this.state.messages}/>
		</div>);
	}
};

ReactDOM.render(<Hello/>,document.getElementById('app'),()=>{
	console.log('渲染完成了！');
});
