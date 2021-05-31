import Login from './login'
import { connect } from 'react-redux'
import { updateUserToken, updateUserDetails } from '../../redux/actions/user.actions'
import { authenticateUser } from '../../api/auth'

const mapStateToProps = state => {
    return {
        userReducer: state.userReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateUserToken: value => dispatch(updateUserToken(value)),
        updateUserDetails: value => dispatch(updateUserDetails(value)),
        authenticateUser: () => authenticateUser(),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);