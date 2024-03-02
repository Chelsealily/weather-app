import { WeatherDataProps } from '../../types/types';
import "./WeatherCard.scss"

const WeatherCard = ({ location, temperature_c, condition, condition_icon, localtime }:WeatherDataProps) => {
  return (
    <section className="weathercard">
      <div className='weathercard__title'> 
      <h1> Weather <br></br> Forecast</h1>
      <p>{location}</p>
      </div> 
      <div className='weathercard__info'>
      <p>{localtime}</p>
      <p>Temperature: {temperature_c}°C</p>
      <p>Condition: {condition}</p>
      <img src={condition_icon}/>
      </div>
    </section>
  );
};

export default WeatherCard;
