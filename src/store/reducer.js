import { FETCH_SITES_BEGIN, FETCH_SITES_SUCCESS, FETCH_SITES_FAILURE } from './constants'

const initialState = {
    sites: [],
    regions: [],
    environs: [],
    loading: false,
    error: null,
};

export default function sitesReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_SITES_BEGIN:
            return { ...state, loading: true, error: null };
        case FETCH_SITES_SUCCESS:
            const sitesData = action.payload.sitesData.data;
            console.log(sitesData)
            return {
                ...state,
                loading: false,
                loadError: false,
                regions: [...new Set(sitesData.map(a => a.region))],
                environs: [...new Set(sitesData.map(a => a.environ))],
                sites: sitesData
            };
        case FETCH_SITES_FAILURE:
            console.log(action.payload.error)
            return { ...state, loading: false, error: action.payload.error };
        default:
            return state
    }
}