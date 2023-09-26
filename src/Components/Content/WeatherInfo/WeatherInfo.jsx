import s from './WeatherInfo.module.css'
let WeatherInfo = (props) => {
    return (
        <div className={s.weatherInfo}>
            Температура: {props.temperature}
        </div>
    )
}

export default WeatherInfo;