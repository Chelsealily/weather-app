import { ForecastDataProps, WeatherDataProps } from '../../types/types';
import DayCardList from '../DayCardList/DayCardList';
import Greeting from '../Greeting/Greeting';
import WeekCardList from '../WeekCardList/WeekCardList';
import "./WeatherCard.scss"

type WeatherCardProps = {
    currentWeather: WeatherDataProps;
    forecastData: ForecastDataProps;
  };

const WeatherCard = ({ currentWeather, forecastData }:WeatherCardProps) => {

  return (
    
    <section className="weathercard"> 
      <div className='weathercard__greeting'> 
        <Greeting/>
        <div className='weathercard__greeting--text'>
        <p> {currentWeather.localtime}</p>
        <p>{currentWeather.location}</p>
        </div>
      </div> 
    <div className='weathercard__grid'>
      <section className='weathercard__top'>
      
      <div className='weathercard__title'> 
      <p>{"> Current Weather"}</p>
      <h1> {currentWeather.temperature_c}°C</h1>
      <p>○ {currentWeather.condition}</p>
      <img className='weathercard__title--pic' src={currentWeather.condition_icon} alt='weather icon'/>

      </div> 
      </section>   
      <section className='weathercard__middle'>
      <p className="weathercard__moreInfo--title">{ "> Current Conditions"}</p>
      <div className='weathercard__moreInfo'>
      
      <p>Feels like: <br></br><br></br> {currentWeather.feelslike_c}°C</p>  
      <p>Wind: <br></br><br></br>{currentWeather.wind_mph} mph</p>  
      <p>Humidty:<br></br><br></br> {currentWeather.humidity}</p>
      <p>Cloud:<br></br><br></br> {currentWeather.cloud}</p>
      </div>
      <div className='weathercard__dayForecast'>
      <DayCardList forecastData={forecastData} />
      </div>
      </section>
      </div>  
      <section className='weathercard__weekForecast'>
      <WeekCardList forecastData={forecastData}/>

      </section>
     
    
    </section>
   
  );
};

export default WeatherCard;
