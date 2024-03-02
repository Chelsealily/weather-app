import { useState, useEffect } from 'react';
import './App.scss';
import { WeatherDataProps } from './types/types';
import WeatherCard from './components/WeatherCard/WeatherCard';


function App() {
  const [weatherData, setWeatherData] = useState<WeatherDataProps | null>(null);

  const getWeather = async (latitude: number, longitude: number) => {
    const url = `https://api.weatherapi.com/v1/current.json?key=44f91b4cf89e4c89a4c173822242702&q=${latitude},${longitude}&aqi=no`;
    const res = await fetch(url);
    const data = await res.json();
    setWeatherData({
      location: data.location.name + ", " + data.location.country,
      temperature_c: data.current.temp_c,
      condition: data.current.condition.text,
      condition_icon: data.current.condition.icon,
      localtime: data.location.localtime,
      wind_mph: data.current.wind_mph,
      humidity:data.current.humidity,
      cloud: data.current.cloud,
      feelslike_c: data.current.feelslike_c,
    });
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          getWeather(latitude, longitude);
        },
        () => {
          console.error('Error getting location. Defaulting to London.');
          // Default to London coordinates
          getWeather(51.5074, -0.1278); // London coordinates
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser. Defaulting to London.');
      // Default to London coordinates
      getWeather(51.5074, -0.1278); // London coordinates
    }
  }, []);

  return (
    <div className="App">
      {weatherData && (<WeatherCard {...weatherData}/>
      )}
    </div>
  );
}

export default App;
