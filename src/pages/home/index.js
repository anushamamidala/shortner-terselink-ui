import Home from './home'
import { connect } from 'react-redux'
import { getOverAllStats, getClicksSummary, getRecentLinks } from '../../redux/actions/home.actions'

const mapStateToProps = state => {
    return {
        overallStats: state.homeReducer.overallStats,
        clicksSummary: state.homeReducer.clicksSummary,
        recentLinks: state.homeReducer.recentLinks
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getOverAllStats: async () => await dispatch(getOverAllStats()),
        getClicksSummary: async (period) => await dispatch(getClicksSummary(period)),
        getRecentLinks: async () => await dispatch(getRecentLinks()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)