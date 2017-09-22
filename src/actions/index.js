import axios from 'axios';

const API_KEY = '95424a5ec2fe6beef5c374d2cd11b070';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    //request is a promise
    const request = axios.get(url);

    //but middleware will unwrap promise for us, see '../reducers/weatherReducer'
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}