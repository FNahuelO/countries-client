export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
export const CREATE_ACT = 'CREATE_ACT';
export const GET_COUNTRY = 'GET_COUNTRY';
export const GET_ACTIVITIES = 'GET_ACTIVITIES';
export const FILTER_ACTIVITY = 'FILTER_ACTIVITY';


export const getAllCountries = () => {
    return dispatch => fetch('http://localhost:3001/countries')
        .then(response => response.json())
        .then(json => dispatch({ type: GET_ALL_COUNTRIES, payload: json }))
};

export const getCountry = (code) => {
    return dispatch => fetch(`http://localhost:3001/countries/${code}`)
        .then(response => response.json())
        .then(json => dispatch({ type: GET_COUNTRY, payload: json }))
};

export const getCountri = (name) => {
    return dispatch => fetch(`http://localhost:3001/countries?name=${name}`)
        .then(response => response.json())
        .then(json => dispatch({ type: GET_ALL_COUNTRIES, payload: json }))
}

export const getActivities = () => {
    return dispatch => fetch('http://localhost:3001/activity')
    .then(response => response.json())
    .then(json => dispatch({ type: GET_ACTIVITIES, payload: json}))
}

export const alphabetic = (form) => {
    return dispatch => fetch(`http://localhost:3001/alpha/${form}`)
    .then(response => response.json())
    .then(json => dispatch({ type: GET_ALL_COUNTRIES, payload: json }))
}

export const population = (form) => {
    return dispatch => fetch(`http://localhost:3001/population/${form}`)
    .then(response => response.json())
    .then(json => dispatch({ type: GET_ALL_COUNTRIES, payload: json }))
}

export const filterContinent = (continente) => {
    return dispatch => fetch(`http://localhost:3001/filter/${continente}`)
    .then(response => response.json())
    .then(json => dispatch({ type: GET_ALL_COUNTRIES, payload: json }))
}

export const filterActivities = (activity) => {
    return {
        type: FILTER_ACTIVITY,
        payload: activity
    }
}