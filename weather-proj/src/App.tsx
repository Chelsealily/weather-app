import { useState, useEffect } from 'react';
import './App.scss';

type WeatherDataProps = {
  location: string;
  temperature_c: number;
  condition: string;
};

function App() {
  const [weatherData, setWeatherData] = useState<WeatherDataProps | null>(null);

  const getWeather = async (latitude: number, longitude: number) => {
    const url = `https://api.weatherapi.com/v1/current.json?key=44f91b4cf89e4c89a4c173822242702&q=${latitude},${longitude}&aqi=no`;
    const res = await fetch(url);
    const data = await res.json();
    setWeatherData({
      location: data.location.name,
      temperature_c: data.current.temp_c,
      condition: data.current.condition.text,
    });
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          getWeather(latitude, longitude);
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <div className="App">
      <h1>Weather App</h1>
      {weatherData && (
        <div>
          <h2>{weatherData.location}</h2>
          <p>Temperature: {weatherData.temperature_c}°C</p>
          <p>Condition: {weatherData.condition}</p>
        </div>
      )}
    </div>
  );
}

export default App;
