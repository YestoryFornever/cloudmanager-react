import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from '../actions'
import AddTodo from '../components/add-todo'
import TodoList from '../components/todo-list'
import Footer from '../components/footer'

class App extends Component {
	constructor(props){
		super();
		console.log(props);//即根组件Provider中的store
	}
	render() {
		// Injected by connect() call:
		const { dispatch, visibleTodos, visibilityFilter } = this.props
		return (
			<div>
				<AddTodo
					onAddClick={text =>
						dispatch(addTodo(text))
					} />
				<TodoList
					todos={visibleTodos}
					onTodoClick={index =>
						dispatch(toggleTodo(index))
					} />
				<Footer
					filter={visibilityFilter}
					onFilterChange={nextFilter =>
						dispatch(setVisibilityFilter(nextFilter))
					} />
			</div>
		)
	}
}

function selectTodos(todos, filter) {
	switch (filter) {
		case VisibilityFilters.SHOW_ALL:
			return todos
		case VisibilityFilters.SHOW_COMPLETED:
			return todos.filter(todo => todo.completed)
		case VisibilityFilters.SHOW_ACTIVE:
			return todos.filter(todo => !todo.completed)
	}
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
	return {
		visibleTodos: selectTodos(state.todos, state.visibilityFilter),
		visibilityFilter: state.visibilityFilter
	}
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select/*state->props,dispatch->props*/)(App)