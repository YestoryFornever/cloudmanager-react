import { combineReducers } from 'redux';
import home from './home/home.reducer';
import { error } from './error/error.reducer';

const fnReducers = combineReducers({
	home,
	error
})

export default fnReducers

/*export default function todoApp(state={},action){//不使用combineReducers的写法
	return {
		visibilityFilter:visibilityFilter(state.visibilityFilter,action),
		todos:todos(state.todos,action)
	}
}*/