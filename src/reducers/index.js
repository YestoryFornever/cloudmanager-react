import { combineReducers } from 'redux'
import visibilityFilter from './visibility-filter.reducer'
import { todos } from './todos.reducer'

const todoApp = combineReducers({
	visibilityFilter,
	todos
})

export default todoApp