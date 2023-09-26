import s from './Content.module.css'
import Locale from "./Locale/Locale";
import WeatherInfo from "./WeatherInfo/WeatherInfo";
import WeatherInfoContainer from "./WeatherInfo/WeatherInfoContainer";
let Content = () => {
    return (
        <div className={s.content}>
            <div>
                <Locale />
            </div>
            <div>
                <span>Погода в городе сегодня</span>
            </div>
            <div>
                <WeatherInfoContainer />
            </div>
        </div>
    )
}

export default Content;