import axios from "axios";

let localeAPIkey = "e26c64849f1e4df5b8e3d3bffa1d5407";
let weatherAPIkey = "rcywX6IdS96f50xJuObdkcAVfgKUyaQG";

let localeInstance = axios.create(
    {baseURL: `https://api.ipgeolocation.io/ipgeo?apiKey=${localeAPIkey}`}
)
let weatherInstance = axios.create(
    {baseURL: `https://dataservice.accuweather.com/forecasts/v1/daily/1day/`}
)

export let localeAPI = {
    me () {
        return localeInstance.get('')
            .then(response => {return response.data})
    }
}
export let weatherAPI = {
    get (geoname_id) {
        return weatherInstance.get(`${geoname_id}?apikey=${weatherAPIkey}`)
            .then(response => {return response.data})
    }
}