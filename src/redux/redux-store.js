import { configureStore } from '@reduxjs/toolkit'
import weatherInfoReducer from "./weatherInfoReducer";
import headerReducer from "./headerReducer";


let reducers = {
    weatherInfo: weatherInfoReducer,
    search: headerReducer
};

let store = configureStore({reducer: reducers});

export default store;

