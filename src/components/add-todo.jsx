import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions';


export default class AddTodo extends Component {
	render() {
		let input;
		return (
			<div>
				<form onSubmit={e=>{
					e.preventDefault();
					if(!input.value.trim()){return}
					this.props.onAddClick(input.value);
					input.value = '';
				}}>
					<input ref={node=>{input=node}}/>
					<button type="submit">添加待办项</button>
				</form>
			</div>
		)
	}
}

/**
 * 也可以直接使用connect封装为container组件
 * 此时App父组件中无需使用onAddClick方法
 */
/*let AddTodo = ({dispatch})=>{//{dispatch,onAddClick}
	let input;
	return (
		<div>
			<form onSubmit={e=>{
				e.preventDefault();
				if(!input.value.trim()){return}
				dispatch(addTodo(input.value));
				input.value = '';
			}}>
				<input ref={node=>{input=node}}/>
				<button type="submit">添加待办项</button>
			</form>
		</div>
	)
}
AddTodo = connect()(AddTodo);

export default AddTodo;*/

