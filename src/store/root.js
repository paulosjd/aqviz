import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import sitesReducer from './reducer'

// const appReducer = combineReducers({
//     sitesReducer
// });

export const root = createStore(
    // appReducer,
    sitesReducer,
    applyMiddleware(thunk)
);
