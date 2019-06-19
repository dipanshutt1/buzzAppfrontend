import {combineReducers} from "redux";
import buzzReducer from './buzzReducer';
import complaintReducer from './complaintReducer';
import userProfileReducer from './userProfileReducer'

export default combineReducers({
    buzzReducer,
    complaintReducer,
    userProfileReducer
})