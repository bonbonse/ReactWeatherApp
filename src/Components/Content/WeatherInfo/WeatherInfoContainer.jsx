import WeatherInfo from "./WeatherInfo";
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
    return {
        temperature: state.weatherInfo.temperature,
        wind: state.weatherInfo.wind,
        weather: state.weatherInfo.weather,
        curTimeOfDay: state.weatherInfo.curTimeOfDay
    }
}

let WeatherInfoContainer = connect(
    mapStateToProps,
    {})(WeatherInfo)

export default WeatherInfoContainer;
