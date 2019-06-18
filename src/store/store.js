import{createStore,applyMiddleware, compose} from "redux";
import buzzReducer from "../reducer/buzzReducer";
import complaintReducer from '../reducer/complaintReducer';
import thunk from 'redux-thunk';
import reducers from '../reducer/combineReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store=createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
);
export default store;