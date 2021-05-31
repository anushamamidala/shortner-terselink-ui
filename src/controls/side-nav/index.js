import SideNav from './side-nav'
import {connect} from 'react-redux'

const mapStateToProps = state => {
    return {
        userDetails: state.userReducer.userDetails
    }
}

export default connect(mapStateToProps)(SideNav)