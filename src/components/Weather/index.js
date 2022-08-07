import React, { useEffect, useState, useRef } from'react';
import './styles.css';
import CountriesDropdown from './CountriesDropdown';
import WeatherDetails from './WeatherDetails'; 
import fetchWeatherRequest from '../../services/fetchWeatherRequest';
import fetchCountriesRequest from '../../services/fetchCountriesRequest';

const Weather = () => {
  const didMount = useRef(null)
  const [weatherData, setWeatherData] = useState({
    loading: false,
    data: {},
    error: false,
  });
  const [allCountries, setAllCountries] = useState({
    loading: false,
    data: [],
    error: false,
  });

  const fetchCountries = async () => {
    return await fetchCountriesRequest()
      .then((res) => {
        console.log('res', res);
        setAllCountries({ data: res.data, loading: false, error: false });
      })
      .catch((error) => {
        setAllCountries({ ...allCountries, data: {}, error: true });
        console.log('error', error);
      });
  }

  const handleSelectCountry = async (event) => {
    setWeatherData({ ...weatherData, loading: true });
    await fetchWeatherRequest(event.target.value)
      .then((res) => {
        console.log('res', res);
        setWeatherData({ data: res.data, loading: false, error: false });
      })
      .catch((error) => {
        setWeatherData({ ...weatherData, data: {}, error: true });
        console.log('error', error);
      });
  }

  useEffect(() => {
    if (fetchCountries && !didMount.current) {
      didMount.current = true
      fetchCountries()
    }
  }, []);

  return (
    <div className="container-fluid weather-section">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-sm-12 col-xs-12 mx-4"> 
        
          <h1 className="app-name text-center">
            Weather <b>Forecast</b><span>🌤</span>
          </h1>

          <div className="countries mb-4">
            <CountriesDropdown
              allCountries={allCountries.data}
              handleSelectCountry={handleSelectCountry}
            />
          </div>

          <div className="details-container">
            <WeatherDetails  weatherData={weatherData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
