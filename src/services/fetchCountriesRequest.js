
import axios from 'axios';

const url = 'https://restcountries.com/v3.1/all';

const fetchCountriesRequest = (query) => {
  return axios.get(url);
}

export default fetchCountriesRequest;