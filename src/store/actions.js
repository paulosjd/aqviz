import axios from "axios";
import {
    FETCH_SITES_BEGIN,
    FETCH_SITES_SUCCESS,
    FETCH_SITES_FAILURE,
    TEXT_SEARCH_CHANGE,
    REGION_CLICK,
} from './constants'

export const fetchSites = () => {
    let url = 'http://127.0.0.1:6543/sites';
    return dispatch => {
        dispatch({ type: FETCH_SITES_BEGIN});
        axios.get(url)
            .then(sitesData => {
                dispatch({ type: FETCH_SITES_SUCCESS, payload: { sitesData } });
            })
            .catch((error) => dispatch({ type: FETCH_SITES_FAILURE, payload: { error } }))
    }
};

export const setTextInput = (val) => {
    return { type: TEXT_SEARCH_CHANGE, value: val}
};

export const regionClick = (val, only_add) => {
    return { type: REGION_CLICK, value: val, only_add: only_add}
};