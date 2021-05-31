export const BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL || "http://localhost:5800"
export const AUTH = `${BASE_URL}/auth`
export const OVER_ALL_STATS = `${BASE_URL}/api/stats/overall-stats`
export const CLICKS_SUMMARY = `${BASE_URL}/api/stats/clicks-summary`
export const RECENT_LINKS = `${BASE_URL}/api/links?records=5&page_number=1`