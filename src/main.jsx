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
			textareaValue:'textarea value...'
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleRadio = this.handleRadio.bind(this);
		this.handleCheckbox = this.handleCheckbox.bind(this);
	}
	handleSubmit(e){
		e.preventDefault();
		// console.log(e);
		console.log({
			input:this.refs['refInput'].value,
			select:this.refs['refSelect'].value,
			radio:this.state.radioValue,
			checkbox:this.state.checkboxValue,
			textarea:this.refs['refTextarea'].value,
		});
	}
	handleRadio(e){
		this.setState({
			radioValue:e.target.value
		});
	}
	handleCheckbox(e){
		let curCheckboxValues = this.state.checkboxValue.slice();
		if(!curCheckboxValues.includes(e.target.value)){
			curCheckboxValues.push(e.target.value);
		}else{
			curCheckboxValues.splice(curCheckboxValues.indexOf(e.target.value),1);
		}
		this.setState({
			checkboxValue:curCheckboxValues
		})
	}
	render(){
		return (<div>
			<SubMessage messages={this.state.messages}/>
			<form onSubmit={this.handleSubmit}>
				<input ref='refInput' defaultValue={this.state.inputValue}/><br/>
				<select ref='refSelect' defaultValue={this.state.selectValue}>
					<option defaultValue='1'>one</option>
				</select><br/>
				{/*处理radio／checkbox最好还是用onchange*/}
				<label htmlFor='a'>a</label>
				<input name='abc' type='radio' onChange={this.handleRadio} value='a' />
				<input name='abc' type='radio' onChange={this.handleRadio} value='b' />
				<input name='abc' type='radio' onChange={this.handleRadio} value='c' />
				<br/>
				<label htmlFor='x'>x</label>
				<input name='xyz' type='checkbox' onChange={this.handleCheckbox} value='x'/>
				<input name='xyz' type='checkbox' onChange={this.handleCheckbox} value='y'/>
				<input name='xyz' type='checkbox' onChange={this.handleCheckbox} value='z'/>
				<br/>
				<textarea ref='refTextarea' defaultValue={this.state.textareaValue}></textarea><br/>
				<button type='submit'>submit</button>
			</form>
		</div>);
	}
};

ReactDOM.render(<Hello/>,document.getElementById('app'),()=>{
	console.log('渲染完成了！');
});
