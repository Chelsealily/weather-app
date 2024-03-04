import { useState, useEffect } from "react";
import "./App.scss";
import { WeatherDataProps, ForecastDataProps, HourData } from "./types/types";
import WeatherCard from "./components/WeatherCard/WeatherCard";

function App() {
  const [weatherData, setWeatherData] = useState<WeatherDataProps | null>(null);
  const [forecastData, setForecastData] = useState<ForecastDataProps | null>(
    null
  );

  const getWeather = async (latitude: number, longitude: number) => {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=44f91b4cf89e4c89a4c173822242702&q=${latitude},${longitude}&days=6&aqi=yes&alerts=no`;
    const res = await fetch(url);
    const data = await res.json();

    // Current weather data
    const currentWeather: WeatherDataProps = {
      location: data.location.name + ", " + data.location.country,
      temperature_c: data.current.temp_c,
      condition: data.current.condition.text,
      condition_icon: data.current.condition.icon,
      localtime: data.location.localtime,
      wind_mph: data.current.wind_mph,
      humidity: data.current.humidity,
      cloud: data.current.cloud,
      feelslike_c: data.current.feelslike_c,
    };

    setWeatherData(currentWeather);

    // Forecast data
    const forecastDays: HourData[][] = data.forecast.forecastday.map(
      (day: any) =>
        day.hour.map((hour: any) => ({
          time: hour.time,
          temp_c: hour.temp_c,
          condition_text: hour.condition.text,
          condition_icon: hour.condition.icon,
        }))
    );

    setForecastData(forecastDays);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          getWeather(latitude, longitude);
        },
        () => {
          console.error("Error getting location. Defaulting to London.");
          // Default to London coordinates
          getWeather(51.5074, -0.1278); // London coordinates
        }
      );
    } else {
      console.error(
        "Geolocation is not supported by this browser. Defaulting to London."
      );
      // Default to London coordinates
      getWeather(51.5074, -0.1278); // London coordinates
    }
  }, []);

  return (
    <div className="App">
      {weatherData && forecastData && (
        <WeatherCard currentWeather={weatherData} forecastData={forecastData} />
      )}
    </div>
  );
}

export default App;
