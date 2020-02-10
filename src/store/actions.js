import axios from "axios";
import { FETCH_SITES_BEGIN, FETCH_SITES_SUCCESS, FETCH_SITES_FAILURE } from './constants'

export const fetchSites = () => {
    let url = 'http://127.0.0.1:6543/sites/';
    return dispatch => {
        axios.get(url, {headers: {"Authorization": "Bearer " + localStorage.getItem('id_token')}})
            .then(profileData => {
                dispatch({ type: FETCH_SITES_SUCCESS, payload: {profileData} });
            })
            .catch((error) => dispatch({ type: FETCH_SITES_FAILURE, payload: {error} }))
    }
};
