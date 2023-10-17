import WeatherInfo from "./WeatherInfo";
import {connect} from 'react-redux'
import {Component} from "react";
import {getWeather} from "../../../redux/weatherInfoReducer";

class WeatherInfoContainer extends Component{
    componentDidMount() {

    }

    getWeatherButton = () => {
        this.props.getWeather(this.props.geoname_id)
    }

    render() {
        return (
            <div>
                <WeatherInfo {...this.props}/>
                <button onClick={this.getWeatherButton}>update</button>
            </div>
        )
    }

}

let mapStateToProps = (state) => {
    return {
        temperature: state.weatherInfo.temperature,
        iconPhraseWeather: state.weatherInfo.iconPhrase,
        geoname_id: state.search.geoname_id
    }
}

export default connect(
    mapStateToProps,
    {getWeather})(WeatherInfoContainer)

