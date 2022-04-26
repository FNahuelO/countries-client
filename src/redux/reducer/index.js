import { GET_ALL_COUNTRIES, GET_COUNTRY, GET_ACTIVITIES, FILTER_ACTIVITY } from '../actions/index';


const initialState = {
    countries: [],
    country: {},
    actividades: [],
    countryAct: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload
            }
        case GET_COUNTRY:
            return {
                ...state,
                country: action.payload
            }
        case GET_ACTIVITIES:
            return {
                ...state,
                actividades: action.payload
            }
        case FILTER_ACTIVITY:
            const allCountries = state.countries
            const filterActivities = action.payload === 'All' ? allCountries : allCountries.filter(country => country.actividads?.map(el => el.name).includes(action.payload))
            return {
            ...state,
            countryAct: filterActivities
            }
        default:
            return state
    };
};

export default rootReducer;
