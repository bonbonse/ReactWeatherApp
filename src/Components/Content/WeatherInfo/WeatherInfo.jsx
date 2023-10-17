import s from './WeatherInfo.module.css'
let WeatherInfo = (props) => {
    return (
        <div className={s.weatherInfo}>
            <div>Погода: {props.iconPhraseWeather}</div>
            <div>Температура: {props.temperature}</div>
            <div>Ветер: {props.wind}</div>
        </div>
    )
}

export default WeatherInfo;