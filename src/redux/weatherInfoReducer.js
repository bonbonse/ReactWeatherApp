let SET_TEMPERATURE = 'SET-TEMPERATURE'
let SET_CURRENT_TIME_OF_DAY = 'SET-CURRENT-TIME-OF-DAY';
let initState = {
    temperature: 24,
    wind: 5,
    weather: 'sun',
    curTimeOfDay: 'morning'
}

const weatherInfoReducer = (state = initState, action) => {
    switch (action.type){
        case SET_TEMPERATURE:
            let stateCopy = {...state}
            stateCopy.temperature = action.temperature;
            console.log(stateCopy.temperature);
            return stateCopy;
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





export default weatherInfoReducer;