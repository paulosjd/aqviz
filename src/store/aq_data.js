import { POLLUTANT_SELECT, FETCH_SITE_DATA_BEGIN, FETCH_SITE_DATA_SUCCESS, FETCH_SITE_DATA_FAILURE,
} from './constants'

const initialState = {
    pollutant: 'pm10',
    chartTimeSpan: '',
    loading: false,
    siteData: {}
};

export default function aqReducer(state = initialState, action) {
    switch(action.type) {
        case POLLUTANT_SELECT:
            return { ...state, pollutant: action.value };
        case FETCH_SITE_DATA_BEGIN:
            return { ...state, loading: true };
        case FETCH_SITE_DATA_SUCCESS:
            const siteData = action.payload.siteData.data;
            console.log(siteData);
            // siteData[] -- need site_id in resp - so can assign as site_aq_data and use for .map etc.
            return { ...state, loading: false };
        case FETCH_SITE_DATA_FAILURE:
            return { ...state, loading: false };
        default:
            return state
    }
}