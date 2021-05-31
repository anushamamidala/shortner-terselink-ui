import * as actionTypes from '../action-types.constants'

export const updateUserDetails = payload => {
    return {
        type: actionTypes.UPDATE_USER_DETAILS,
        payload: payload
    }
}

export const updateUserToken = token => {
    return{
        type: actionTypes.AUTH_TOKEN,
        payload: token
    }
}