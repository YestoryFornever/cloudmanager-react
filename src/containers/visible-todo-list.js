import {connect} from 'react-redux';
import {ToggleTodo} from '../actions';
import {TodoList} from '../components/todo-list';

const getVisibleTodos = (todos,filter)=>{
	switch(filter){
		case 'SHOW_ALL':return todos;
		case 'SHOW_COMPLETED':todos.filter(t=>t.completed);
		case 'SHOW_ACTIVE':todos.filter(t=>!t.completed);
	}
}

const mapStateToProps = (state)=>{
	return {
		todos:getVisibleTodos(state.todos,state.visibilityFilter),
	}
}

const mapDispatchToprops = ()=>{
	return {
		onTodoClick:(id)=>{
			dispatch(toggleTodo(id))
		}
	}
}

const VisibleTodoList = connect(
	mapStateToProps,
	mapDispatchToprops
)(TodoList);

export default VisibleTodoList;