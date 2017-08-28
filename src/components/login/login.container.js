import { connect } from 'react-redux'
import { setAuthenticate } from '../../actions'
import { history } from '../../history'
import Login from './login.component'
const _s = (state) => {
	return {
		authenticated: state.login.auth
	}
}
const _d = (dispatch) => {
	return {
		onLogin: (auth) => {
			dispatch(setAuthenticate(auth));
			history.push('/home');
		}
	}
}
export default connect(_s, _d)(Login);