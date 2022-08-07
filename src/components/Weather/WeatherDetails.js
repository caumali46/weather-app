import React from'react'; 
import { getCurrentDate } from '../../utils/functions';
import Loader from './Loader';
import NotFoundError from './NotFoundError';

const IMG_URL = 'https://openweathermap.org/img/wn';

const WeatherDetails = (props) => {
  const { weatherData: { data, loading, error } } = props;
  const toDate = getCurrentDate();

  if( !data && !data?.main ) {
    return null;
  }

  if(error) {
    return <NotFoundError />
  }

  if(loading) {
    return <Loader />
  }
  
  if( data?.main ) {
    return ( 
      <div id="weather-details">
        <div className="city-name">
          <h2>
            {data?.name}, <span>{data?.sys?.country}</span>
          </h2>
        </div>
        <div className="date">
          <span>{toDate}</span>
        </div>
        <div className="icon-temp">
          <img
            className=""
            src={`${IMG_URL}/${data?.weather[0]?.icon}@2x.png`}
            alt={data?.weather[0]?.description}
          />
          {Math.round(data?.main?.temp)}
          <sup className="deg">&deg;C</sup>
        </div>
        <div className="des-wind">
          <p>{data?.weather[0].description.toUpperCase()}</p>
          <p>Wind Speed: {data?.wind?.speed}m/s</p>
        </div>
      </div>
    );
  }
  return null;
}
export default WeatherDetails;
