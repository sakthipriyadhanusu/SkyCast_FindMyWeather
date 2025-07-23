import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";

export default function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const city = localStorage.getItem("city");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey ="bd5e378503939ddaee76f12ad7a97608"
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  const tempFahrenheit = useMemo(() => {
    if (weatherData) {
      return (weatherData.main.temp * 9) / 5 + 32;
    }
    return null;
  }, [weatherData]);

  if (loading) return <p className="loading">Loading...</p>;

  if (!weatherData)
    return <p className="error">Could not fetch weather data. Please try again.</p>;

  return (
    <div className="weather">
      <h2>Weather in {weatherData.name}</h2>
      <div className="weather-card">
        <p><strong>Temperature:</strong> {weatherData.main.temp}°C / {tempFahrenheit.toFixed(2)}°F</p>
        <p><strong>Humidity:</strong> {weatherData.main.humidity}%</p>
        <p><strong>Wind Speed:</strong> {weatherData.wind.speed} m/s</p>
        <p><strong>Condition:</strong> {weatherData.weather[0].description}</p>
      </div>
    </div>
  );
}
