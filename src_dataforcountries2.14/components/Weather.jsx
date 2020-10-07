import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = ({ capital }) => {
  const [weather, setWeather] = useState("");

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${apiKey}&query=${capital}`
      )
      .then((response) => {
        setWeather(response.data.current);
      });
  }, [capital]);

  return (
    <div>
      <h3>Weather in {capital}</h3>
      <img src={weather.weather_icons} alt='weather' />
      <p>Temperature: {weather.temperature}</p>
      <p>Wind:{weather.wind_speed}km/s</p>
    </div>
  );
};

export default Weather;
