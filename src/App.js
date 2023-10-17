import s from './App.module.css';
import Content from "./Components/Content/Content";
import HeaderContainer from "./Components/Header/HeaderContainer";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


function App() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className={s.App}>
                <HeaderContainer/>
                <Content/>
            </div>
        </LocalizationProvider>
    );
}

export default App;
