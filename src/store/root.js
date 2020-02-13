import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import sites from './sites'
import aqData from './aq_data'

const appReducer = combineReducers({
    sites,
    aqData,
});

export const root = createStore(
    appReducer,
    applyMiddleware(thunk)
);
