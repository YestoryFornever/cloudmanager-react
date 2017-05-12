import { connect } from 'react-redux';
import { setAuthenticate } from '../../actions'
import Login from './login.component';
const _s = (state)=>{
	console.log(state);
	return {
		authenticated:state.login
	}
}
const _d = (dispatch)=>{
	return {
		onLogin:(auth)=>{
			dispatch(setAuthenticate(auth));
		},
		onLogout:(auth)=>{
			dispatch(setAuthenticate(auth));
		}
	}
}
export default connect(_s,_d)(Login);