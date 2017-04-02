import todos from './todo';
import visibilityFilter from './visibility-filter';

import combineReducers from 'redux';

const todoApp = combineReduces({
	todos,
	visibilityFilter
});

export default todoApp;