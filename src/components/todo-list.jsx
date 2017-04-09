import React, { Component, PropTypes } from 'react'
import Todo from './todo'

export default class TodoList extends Component {
	render() {
		return (
			<ul>
				{this.props.todos.map((todo, index) =>
					// console.log(todo);
					<Todo {...todo}
						key={index}
						onClick={() => this.props.onTodoClick(index)} />
				)}
			</ul>
		)
	}
}