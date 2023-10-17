import {weatherAPI} from "../api/api";

let SET_TEMPERATURE = 'SET-TEMPERATURE'
let SET_CURRENT_TIME_OF_DAY = 'SET-CURRENT-TIME-OF-DAY';
let SET_ICON_PHRASE_WEATHER = 'SET_ICON_PHRASE_WEATHER';
let initState = {
    temperature: null,
    iconPhrase: ''
}

const weatherInfoReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_TEMPERATURE: {
            let temperatureInCelsius = action.temperature - 32 === 0 ? 0
                : Math.round((action.temperature - 32) * 5 / 9);
            return {
                ...state,
                temperature: temperatureInCelsius
            }
        }
        case SET_ICON_PHRASE_WEATHER: {
            return {
                ...state,
                iconPhrase: action.iconPhrase
            }
        }
        default:
            return state;
    }
}

export let setTemperature = (temperature) => {
    return {type: SET_TEMPERATURE, temperature}
}
export let setCurrentTimeOfDay = (timeOfDay) => {
    return {type: SET_CURRENT_TIME_OF_DAY, timeOfDay}
}
export let setIconPhrase = (iconPhrase) => {
    return {type: SET_ICON_PHRASE_WEATHER, iconPhrase}
}

export let getWeather = (geoname_id) => {
    return (dispatch) => {
        weatherAPI.get(geoname_id)
            .then(data => {
                dispatch(setIconPhrase(data.DailyForecasts[0].Day.IconPhrase))
                dispatch(setTemperature(data.DailyForecasts[0].Temperature.Minimum.Value))
            })
    }
}

export default weatherInfoReducer;