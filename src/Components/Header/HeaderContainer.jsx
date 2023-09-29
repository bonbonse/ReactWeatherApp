import s from './Header.module.css'
import {connect} from "react-redux";
import Header from "./Header";
import {setTextInCitySearch, setTextInDateSearch, setUserLocation} from "../../redux/headerReducer";
import React from "react"
import axios from "axios";
import {setTemperature} from "../../redux/weatherInfoReducer";


//exampleApiWeather:
// https://dataservice.accuweather.com/locations/v1/regions?apikey=rcywX6IdS96f50xJuObdkcAVfgKUyaQG

//exampleApiWeather:
//https://api.ipgeolocation.io/getip
class HeaderContainer extends React.Component {
    weatherAPIkey = "rcywX6IdS96f50xJuObdkcAVfgKUyaQG";
    localeAPIkey = "e26c64849f1e4df5b8e3d3bffa1d5407";
    geoname_id = null;

    componentDidMount() {
        axios.get(`https://api.ipgeolocation.io/ipgeo?apiKey=${this.localeAPIkey}`)
            .then((response) => {
                    let location = {country: response.data.country_name, city: response.data.city}
                    this.props.setUserLocation(location);
                    this.geoname_id = response.data.geoname_id;
                    axios.get(`https://dataservice.accuweather.com/forecasts/v1/daily/1day/${this.geoname_id}?apikey=${this.weatherAPIkey}`)
                        .then((response) => {
                            this.props.setTemperature(response.data.DailyForecasts[0].Temperature.Maximum.Value)
                        })
                }
            )
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

let
    mapStateToProps = (state) => {
        return {
            setTextInCitySearch: state.search.setTextInCitySearch,
            setTextInDateSearch: state.search.setTextInDateSearch,
            setTemperature: state.weatherInfo.setTemperature,
            setUserLocation: state.search.setUserLocation
        }
    }

export default connect(mapStateToProps,
    {setTextInCitySearch, setTextInDateSearch, setTemperature, setUserLocation})

(
    HeaderContainer
)
;