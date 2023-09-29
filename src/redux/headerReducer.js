let SET_TEXT_CITY_SEARCH = 'SET_TEXT_CITY_SEARCH';
let SET_TEXT_DATE_SEARCH = 'SET_TEXT_DATE_SEARCH';
let SET_USER_LOCATION = 'SET_USER_LOCATION';
let initState = {
    curTextInCitySearch: 'rer',
    curTextInDateSearch: '',
    location: {country: '', city: ''}
}

const headerReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_TEXT_CITY_SEARCH:{
            let stateCopy = {...state}
            stateCopy.curTextInCitySearch = action.newCityText;
            return stateCopy;
        }
        case SET_TEXT_DATE_SEARCH: {
            let stateCopy = {...state}
            stateCopy.curTextInDateSearch = action.newDate;
            return stateCopy;
        }
        case SET_USER_LOCATION: {
            let stateCopy = {...state};
            console.log(action.location)
            stateCopy.location = {...state.location,
                country: action.location.country,
                city: action.location.city};
            return stateCopy;
        }

        default:
            return state;
    }
}

export let setTextInCitySearch = (newCityText) => {
    return {type: SET_TEXT_CITY_SEARCH, newCityText}
}
export let setTextInDateSearch = (newDate) => {
    return {type: SET_TEXT_DATE_SEARCH, newDate}
}
export let setUserLocation = (location) => {
    return {type: SET_USER_LOCATION, location}
}


export default headerReducer;