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
			radioValue:'a',
			checkboxValue:'x',
			textareaValue:'textarea value...'
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(e){
		e.preventDefault();
		console.log(e);
		console.log(this.refs['refInput'].value);
	}
	render(){
		return (<div>
			<SubMessage messages={this.state.messages}/>
			<form onSubmit={this.handleSubmit}>
				<input ref='refInput' defaultValue={this.state.inputValue}/><br/>
				<select defaultValue={this.state.selectValue}>
					<option defaultValue='1'>one</option>
				</select><br/>
				{/*处理radio／checkbox最好还是用onchange*/}
				<label htmlFor='a'>a</label>
				<input id='a' type='radio' defaultValue={this.state.radioValue} /><br/>
				<label htmlFor='x'>x</label>
				<input id='x' type='checkbox' defaultValue={this.state.checkboxValue}/><br/>
				<textarea defaultValue={this.state.textareaValue}></textarea><br/>
				<button type='submit'>submit</button>
			</form>
		</div>);
	}
};

ReactDOM.render(<Hello/>,document.getElementById('app'),()=>{
	console.log('渲染完成了！');
});
