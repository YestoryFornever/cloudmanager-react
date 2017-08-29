import { connect } from 'react-redux'
import { setAuthenticate } from '../../utils/actions'
import { history } from '../../utils/history'
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
        },
        test: (n)=>{
            alert(n);
        }
    }
}
export default connect(_s, _d)(Home);