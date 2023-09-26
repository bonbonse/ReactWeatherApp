import {combineReducers, createStore} from 'redux';
import weatherInfoReducer from "./weatherInfoReducer";


let reducers = combineReducers({
    weatherInfo: weatherInfoReducer
});

let store = createStore(reducers);

export default store;

