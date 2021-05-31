import axios from 'axios'
import * as END_POINTS from './endpoints'

export const getRecentLinks = () => {
    return axios.get(END_POINTS.RECENT_LINKS)
}