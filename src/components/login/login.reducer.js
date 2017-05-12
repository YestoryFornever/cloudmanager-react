import { AUTHENTICATED } from '../../actions';
	
export default function login(state = false, action){
	switch (action.type) {
		case AUTHENTICATED:
			return action;
		default:
			return state;
	}
}