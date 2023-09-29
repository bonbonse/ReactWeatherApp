import s from './Header.module.css'

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
            <input placeholder="Input date"/>
        </header>
    )

}
export default Header;