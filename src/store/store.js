import{createStore,applyMiddleware} from "redux";
import buzzReducer from "../reducer/buzzReducer";
import thunk from 'redux-thunk';
import reducers from '../reducer/combineReducer';

const store=createStore(
    reducers,
    applyMiddleware(
        thunk
    )
);
export default store;