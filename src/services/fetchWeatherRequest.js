import axios from 'axios';

const url = 'https://api.openweathermap.org/data/2.5/weather';
const appid = 'dd5bd85a1f9edf87d61cfb970287907f'; 

const fetchWeatherRequest = (query) => {
  return axios
          .get(url, {
            params: {
              q: query,
              units: 'metric',
              appid: appid,
            },
          });
}

export default fetchWeatherRequest;