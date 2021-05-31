import { combineReducers } from 'redux';
import userReducer from './user.reducer'
import homeReducer from './home.reducer'

const rootReducer = combineReducers({
    userReducer,
    homeReducer
});

export default rootReducer;