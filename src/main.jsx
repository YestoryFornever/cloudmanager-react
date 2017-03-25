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
		this.updateInput = this.updateInput.bind(this);
	}
	handleSubmit(e){
		e.preventDefault();
		console.log(e);
	}
	updateInput(e){
		this.setState({
			inputValue:e.target.value
		});
	}
	render(){
		return (<div>
			<SubMessage messages={this.state.messages}/>
			<form onSubmit={this.handleSubmit}>
				<input onChange={this.updateInput} value={this.state.inputValue}/><br/>
				<select value={this.state.selectValue}>
					<option value='1'>one</option>
				</select><br/>
				<label htmlFor='a'>a</label>
				<input id='a' type='radio' value={this.state.radioValue} /><br/>
				<label htmlFor='x'>x</label>
				<input id='x' type='checkbox' value={this.state.checkboxValue}/><br/>
				<textarea value={this.state.textareaValue}></textarea><br/>
				<button type='submit'>submit</button>
			</form>
		</div>);
	}
};

ReactDOM.render(<Hello/>,document.getElementById('app'),()=>{
	console.log('渲染完成了！');
});
