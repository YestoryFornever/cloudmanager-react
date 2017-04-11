import React, { Component, PropTypes } from 'react'
import AddTodo from './add-todo'
import TodoList from './todo-list'
import Footer from './footer'

export default class App extends Component {
	/*constructor(props){
		super();
		console.log(props);//即根组件Provider中的store
	}*/
	render() {
		// Injected by connect() call:
		const { visibleTodos, visibilityFilter, onAddClick, onTodoClick, onFilterChange } = this.props
		return (
			<div>
				<AddTodo
					onAddClick={onAddClick} />
				<TodoList
					todos={visibleTodos}
					onTodoClick={onTodoClick}
					/>
				<Footer
					filter={visibilityFilter}
					onFilterChange={onFilterChange} />
			</div>
		)
	}
}
