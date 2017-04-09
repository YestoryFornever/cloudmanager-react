import { combineReducers } from 'redux'
import visibilityFilter from './visibility-filter.reducer'
import { todos } from './todos.reducer'

const todoApp = combineReducers({
	visibilityFilter,
	todos
})

export default todoApp

/*export default function todoApp(state={},action){//不使用combineReducers的写法
	return {
		visibilityFilter:visibilityFilter(state.visibilityFilter,action),
		todos:todos(state.todos,action)
	}
}*/