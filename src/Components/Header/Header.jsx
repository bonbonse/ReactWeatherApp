import s from './Header.module.css'
import {DatePicker} from "@mui/x-date-pickers/DatePicker";


let Header = (props) => {
    let setTextInCitySearch = (e) => {
        props.setTextInCitySearch(e.target.value);
    }
    return (
        <header className={s.header}>
            <input placeholder="Input city"
                   value={props.curTextInCitySearch}
                   onChange={(e) => setTextInCitySearch(e)}
            />
            <DatePicker />

        </header>
    )

}
export default Header;