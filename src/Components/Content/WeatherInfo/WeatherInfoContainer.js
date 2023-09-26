import WeatherInfo from "./WeatherInfo";
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
    return {
        temperature: state.weatherInfo.temperature
    }
}

let WeatherInfoContainer = connect(
    mapStateToProps,
    {})(WeatherInfo)

export default WeatherInfoContainer;
