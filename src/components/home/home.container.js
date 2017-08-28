import { connect } from 'react-redux'
import { setAuthenticate } from '../../actions'
import { history } from '../../history'
import Home from './home.component'
const _s = (state) => {
    // console.log(state);
    return {
        authenticated: state.login.auth
    }
}
const _d = (dispatch) => {
    return {
        onLogout: (auth) => {
            dispatch(setAuthenticate(auth));
            history.push('/');
        }
    }
}
export default connect(_s, _d)(Home);