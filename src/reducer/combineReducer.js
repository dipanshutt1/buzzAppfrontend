import {combineReducers} from "redux";
import buzzReducer from './buzzReducer';
import complaintReducer from './complaintReducer';
import userProfileReducer from './userProfileReducer';
import resolveReducer from './resolveReducer';
import allUserReducer from './allUserReducer';

export default combineReducers({
    buzzReducer,
    complaintReducer,
    userProfileReducer,
    resolveReducer,
    allUserReducer
})