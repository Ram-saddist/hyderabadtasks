// WeatherApp.js

import React, { useState } from "react";
import "./App.css";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = "3ea9d480c47b245bbe3b5ce7385a0a56"; // Replace with your actual API key

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      console.log(data)
      setWeatherData(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={handleInputChange}
        />
        <button onClick={fetchWeatherData}>Search</button>
      </div>
      {weatherData && weatherData.weather && weatherData.weather.length > 0 && (
        <div className="weather-container">
          <h2>{weatherData.name}</h2>
          <p>{weatherData.weather[0].description}</p>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
