# SkyCast - Find My Weather
## Date: 23.7.25
## Objective:
To build a responsive single-page application using React that allows users to enter a city name and retrieve real-time weather information using the OpenWeatherMap API. This project demonstrates the use of Axios for API calls, React Router for navigation, React Hooks for state management, controlled components with validation, and basic styling with CSS.
## Tasks:

#### 1. Project Setup
Initialize React app.

Install necessary dependencies: npm install axios react-router-dom

#### 2. Routing
Set up BrowserRouter in App.js.

Create two routes:

/ – Home page with input form.

/weather – Page to display weather results.

#### 3. Home Page (City Input)
Create a controlled input field for the city name.

Add validation to ensure the input is not empty.

On valid form submission, navigate to /weather and store the city name.

#### 4. Weather Page (API Integration)
Use Axios to fetch data from the OpenWeatherMap API using the city name.

Show temperature, humidity, wind speed, and weather condition.

Convert and display temperature in both Celsius and Fahrenheit using useMemo.

#### 5. React Hooks
Use useState for managing city, weather data, and loading state.

Use useEffect to trigger the Axios call on page load.

Use useCallback to optimize form submit handler.

Use useMemo for temperature conversion logic.

#### 6. UI Styling (CSS)
Create a responsive and clean layout using CSS.

Style form, buttons, weather display cards, and navigation links.

## Programs:
home.jsx:
```


import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!city.trim()) {
        setError("City name cannot be empty.");
      } else {
        setError("");
        localStorage.setItem("city", city.trim());
        navigate("/weather");
      }
    },
    [city, navigate]
  );

  return (
    <div className="home">
      <h1>SkyCast</h1>
      <p>Find My Weather</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Get Weather</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
}
```

weather.jsx:
```
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
```



## Output:

<img width="1920" height="1080" alt="Screenshot 2025-07-23 103639" src="https://github.com/user-attachments/assets/ba430704-1ad7-4507-af5d-239bda03285c" />

<img width="1920" height="1080" alt="Screenshot 2025-07-23 103627" src="https://github.com/user-attachments/assets/aeb8674c-224b-426f-b2e9-6d765d9d7e26" />


## Result:
A responsive single-page application using React that allows users to enter a city name and retrieve real-time weather information using the OpenWeatherMap API has been built successfully. 
