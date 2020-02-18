import { POLLUTANT_SELECT } from './constants'

const initialState = {
    pollutant: 'pm10'
};

export default function aqReducer(state = initialState, action) {
    switch(action.type) {
        case POLLUTANT_SELECT:
            return { ...state, pollutant: action.value };
        default:
            return state
    }
}