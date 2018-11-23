import axios from 'axios';

const API_KEY = '853a91892bc5416ea0560364df30faab';
const ROOT_URL= `https://samples.openweathermap.org/data/2.5/forecast?q=London,us&appid=b6907d289e10d714a6e88b30761fae22`;


export const FECTH_WEATHER = 'FECTH_WEATHER';


export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    ///console.log('i am from actions::::praveen',request.data)
    
    return {
        type:FECTH_WEATHER,
        payload:request
    };
    
}

