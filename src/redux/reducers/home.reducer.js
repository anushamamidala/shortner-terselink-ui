import * as actionTypes from '../action-types.constants';

const initialState = {
    overallStats: null,
    clicksSummary: [],
    recentLinks: []
}

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_OVER_ALL_STATS: {
            return { ...state, overallStats: action.payload }
        }
        case actionTypes.UPDATE_CLICKS_SUMMARY: {
            return { ...state, clicksSummary: action.payload }
        }
        case actionTypes.UPDATE_RECENT_LINKS: {
            return { ...state, recentLinks: action.payload }
        }
        default: return state;
    }
}

export default homeReducer;