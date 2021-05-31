import * as TYPES from '../action-types.constants'
import * as StatsAPI from '../../api/stats'
import * as LinksAPI from '../../api/links'

export const getOverAllStats = () => async (dispatch) => {
    try {
        const result = await StatsAPI.getOverallStats();
        await dispatch(updateOverAllStats(result?.data || null))
    }
    catch (error) {
        await dispatch(updateOverAllStats(null))
        throw error;
    }
}

export const getClicksSummary = (period) => async (dispatch) => {
    try {
        const body = {
            period: period
        }
        const result = await StatsAPI.getClicksSummary(body);
        const resultData = JSON.parse(result?.data || "{}") || {}
        const dataKeys = Object.keys(resultData);
        const finalData = dataKeys.map(item => {
            return {
                "name": item,
                count: resultData[item] || 0
            }
        })
        await dispatch(updateClicksSummary(finalData))
    }
    catch (error) {
        await dispatch(updateClicksSummary([]))
    }
}

export const getRecentLinks = () => async (dispatch) => {
    try {
        const res = await LinksAPI.getRecentLinks();
        dispatch(updateRecentLinks(res?.data || []))
    }
    catch (error) {
        dispatch(updateRecentLinks([]))
    }
}

export const updateOverAllStats = value => ({
    type: TYPES.UPDATE_OVER_ALL_STATS,
    payload: value
})

export const updateClicksSummary = value => ({
    type: TYPES.UPDATE_CLICKS_SUMMARY,
    payload: value
})

export const updateRecentLinks = links => ({
    type: TYPES.UPDATE_RECENT_LINKS,
    payload: links
})