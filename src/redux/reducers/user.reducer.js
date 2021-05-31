import * as actionTypes from '../action-types.constants';

const initialState = {
    userDetails: null,
    authToken: ''
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_USER_DETAILS: {
            return { ...state, userDetails: action.payload }
        }
        case actionTypes.AUTH_TOKEN: {
            return {...state, authToken: action.payload}
        }
        default: return state;
    }
}

export default userReducer;