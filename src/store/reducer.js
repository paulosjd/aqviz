import { FETCH_SITES_BEGIN, FETCH_SITES_SUCCESS, FETCH_SITES_FAILURE } from './constants'

const initialState = {
    aqSites: [],
    loading: false,
    error: null,
};

export default function sitesReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_SITES_BEGIN:
            return { ...state, loading: true, error: null };
        case FETCH_SITES_SUCCESS:
            const profileData = action.payload.profileData.data;
            return {
                ...state,
                loading: false,
                loadError: false,
                aqSites: []
            };
        case FETCH_SITES_FAILURE:
            return { ...state, loading: false, error: action.payload.error };

        default:
            return state
    }
}