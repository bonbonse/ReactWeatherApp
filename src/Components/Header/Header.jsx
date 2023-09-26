import s from './Header.module.css'

let Header = () => {
    return (
        <header className={s.header}>
            <span>Поиск по городу</span>
            <span>Ввести дату</span>
        </header>
    )

}
export default Header;