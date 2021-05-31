import axios from 'axios'
import * as END_POINTS from './endpoints'

export const getOverallStats = () => {
    return axios.get(END_POINTS.OVER_ALL_STATS)
}

export const getClicksSummary = (body) => {
    return axios.post(END_POINTS.CLICKS_SUMMARY, body)
}