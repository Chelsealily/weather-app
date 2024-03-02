import { WeatherDataProps } from '../../types/types';
import "./WeatherCard.scss"

const WeatherCard = ({ location, temperature_c, condition, condition_icon, localtime, wind_mph, humidity, cloud,feelslike_c }:WeatherDataProps) => {
  return (
    <section className="weathercard"> 
      <section className='weathercard__top'>
      <div className='weathercard__info'>
      <h2>Today's Forecast</h2>  
      <p>{localtime}</p>
      <p>{location}</p>
      <p>{condition}</p>
      </div>
      <div className='weathercard__title'> 
      <h1> {temperature_c}°C</h1>
      <img src={condition_icon} alt='weather icon'/>
      </div> 
      </section>   
      <section className='weathercard__middle'>
      <div className='weathercard__moreInfo'>
      <p>Feels like: {feelslike_c}°C</p>  
      <p>Wind: {wind_mph} mph</p>  
      <p>Humidty: {humidity}</p>
      <p>Cloud: {cloud}</p>
      </div>
      </section>
    </section>
  );
};

export default WeatherCard;
