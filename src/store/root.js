import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import sites from './reducer'

const appReducer = combineReducers({
    sites
});

export const root = createStore(
    appReducer,
    // sitesReducer,
    applyMiddleware(thunk)
);
