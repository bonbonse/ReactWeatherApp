import s from './Header.module.css'
import {connect} from "react-redux";
import Header from "./Header";
import {setTextInCitySearch, setTextInDateSearch, setUserLocation, getGeoname} from "../../redux/headerReducer";
import React from "react"
import {getWeather, setTemperature} from "../../redux/weatherInfoReducer";
//exampleApiWeather:
// https://dataservice.accuweather.com/locations/v1/regions?apikey=rcywX6IdS96f50xJuObdkcAVfgKUyaQG
//exampleApiWeather:
//https://api.ipgeolocation.io/getip
class HeaderContainer extends React.Component {
    localeAPIkey = "e26c64849f1e4df5b8e3d3bffa1d5407";

    componentDidMount() {
        this.props.getGeoname();
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        setTextInCitySearch: state.search.setTextInCitySearch,
        setTextInDateSearch: state.search.setTextInDateSearch,
        setTemperature: state.weatherInfo.setTemperature,
        setUserLocation: state.search.setUserLocation,
        geoname_id: state.search.geoname_id
    }
}

export default connect(mapStateToProps,
    {setTextInCitySearch, setTextInDateSearch,
        setTemperature, setUserLocation, getGeoname, getWeather})(HeaderContainer);