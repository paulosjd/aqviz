import { POLLUTANT_SELECT } from './constants'

const initialState = {
    pollutant: 'pm10'
};

export default function aqReducer(state = initialState, action) {
    switch(action.type) {
        case POLLUTANT_SELECT:
            console.log('act.valuie:')
            console.log(action.value)
            return { ...state, pollutant: action.value };
        default:
            return state
    }
}