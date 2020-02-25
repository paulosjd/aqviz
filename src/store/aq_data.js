import { POLLUTANT_SELECT, FETCH_SITE_DATA_BEGIN, FETCH_SITE_DATA_SUCCESS, FETCH_SITE_DATA_FAILURE, TIMESPAN_SELECT,
} from './constants'

const initialState = {
    pollutant: 'pm10',
    chartTimeSpan: 'month',
    loading: false,
    siteData: {}
};

export default function aqReducer(state = initialState, action) {
    switch(action.type) {
        case POLLUTANT_SELECT:
            return { ...state, pollutant: action.value };
        case TIMESPAN_SELECT:
            return { ...state, chartTimeSpan: action.value };
        case FETCH_SITE_DATA_BEGIN:
            return { ...state, loading: true };
        case FETCH_SITE_DATA_SUCCESS:
            const resp = action.payload.siteData.data;
            const siteData = { ...state.siteData, [resp.site_id]:  resp.aq_data};
            return { ...state, loading: false, siteData };
        case FETCH_SITE_DATA_FAILURE:
            return { ...state, loading: false };
        default:
            return state
    }
}