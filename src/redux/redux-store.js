import {combineReducers, createStore} from 'redux';
import weatherInfoReducer from "./weatherInfoReducer";
import headerReducer from "./headerReducer";


let reducers = combineReducers({
    weatherInfo: weatherInfoReducer,
    search: headerReducer
});

let store = createStore(reducers);

export default store;

