import axios from "axios";
import { FETCH_SITES_BEGIN, FETCH_SITES_SUCCESS, FETCH_SITES_FAILURE, TEXT_SEARCH_CHANGE, REGION_CLICK, SITE_SELECT,
    FETCH_SITE_DATA_BEGIN, FETCH_SITE_DATA_SUCCESS, FETCH_SITE_DATA_FAILURE,

} from './constants'

export const fetchSites = () => {
    let url = 'http://127.0.0.1:6543/sites';
    return dispatch => {
        dispatch({ type: FETCH_SITES_BEGIN});
        axios.get(url)
            .then(sitesData => {
                dispatch({ type: FETCH_SITES_SUCCESS, payload: { sitesData } });
                dispatch({ type: FETCH_SITES_SUCCESS, payload: { sitesData } });
            })
            .catch((error) => dispatch({ type: FETCH_SITES_FAILURE, payload: { error } }))
    }
};

export const fetchSiteData = (site_id) => {
    let url = `http://127.0.0.1:6543/data/${site_id}`;
    return dispatch => {
        dispatch({ type: FETCH_SITE_DATA_BEGIN});
        axios.get(url)
            .then(siteData => {
                dispatch({ type: FETCH_SITE_DATA_SUCCESS, payload: { siteData } });
            })
            .catch((error) => dispatch({ type: FETCH_SITE_DATA_FAILURE, payload: { error } }))
    }
};

export const setTextInput = (val) => {
    return { type: TEXT_SEARCH_CHANGE, value: val }
};

export const regionClick = (val) => {
    return { type: REGION_CLICK, value: val }
};

export const resetSelectedSiteId = () => {
    return { type: SITE_SELECT, value: '' }
};