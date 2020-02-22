import {
    FETCH_SITES_BEGIN, FETCH_SITES_SUCCESS, FETCH_SITES_FAILURE, ENVIRON_CLICK, REGION_CLICK, TEXT_SEARCH_CHANGE,
    SITE_HIGHLIGHT,
} from './constants'

const initialState = {
    sites: [],
    regions: [],
    selectedRegions: [],
    environs: [],
    selectedEnvirons: [],
    hoverSiteCode: '',
    textSearch: '',
    loading: false,
    error: null,
};

export default function sitesReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_SITES_BEGIN:
            return { ...state, loading: true, error: null };
        case FETCH_SITES_SUCCESS:
            const sitesData = action.payload.sitesData.data;
            console.log(sitesData);
            return {
                ...state,
                loading: false,
                loadError: false,
                regions: [...new Set(sitesData.map(a => a.region))],
                environs: [...new Set(sitesData.map(a => a.environ))],
                sites: sitesData
            };
        case FETCH_SITES_FAILURE:
            console.log(action.payload.error);
            return { ...state, loading: false, error: action.payload.error };
        case ENVIRON_CLICK:
            let environList = [...state.selectedEnvirons];
            if (environList.includes(action.value)){
                environList = environList.filter(x => x !== action.value)
            } else {
                environList.push(action.value)
            }
            return { ...state, selectedEnvirons: environList };
        case REGION_CLICK:
            let regionList = [...state.selectedRegions];
            if (regionList.includes(action.value)){
                regionList = !action.only_add ? regionList.filter(x => x !== action.value) : regionList
            } else {
                regionList.push(action.value)
            }
            return { ...state, selectedRegions: regionList };
        case SITE_HIGHLIGHT:
            return { ...state, hoverSiteCode: action.value };
        case TEXT_SEARCH_CHANGE:
            return { ...state, textSearch: action.value };
        default:
            return state
    }
}