import { connect } from 'react-redux';
import { addTodo,toggleTodo, setVisibilityFilter, VisibilityFilters } from '../actions';
import App from '../components/app';

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

function dispatchProps(dispatch){
	return {
		onAddClick:(text) =>{
			dispatch(addTodo(text))
		},
		onTodoClick:(index) =>{
			dispatch(toggleTodo(index))
		},
		onFilterChange:(nextFilter) =>{
			dispatch(setVisibilityFilter(nextFilter))
		}
	}
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(
	select,/*state->props,dispatch->props*/
	dispatchProps/*state->props,dispatch->props*/
)(App);
