import React from "react";
import { connect } from "react-redux";
import { getWeatherData } from "./weather.actions";
// import { useState, useEffect } from "react";
// import { getCitiesInfo } from "./wetaher.gateway";
import WeatherLi from "./WeatherLi";

const Weather = ({ showWeather, weather }) => {
  if (!weather.weather) {
    showWeather();
  }

  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <ul className="cities-list">
        {weather.weather &&
          weather.weather.state.map((el) => (
            <WeatherLi
              key={el.id}
              name={el.name}
              temperature={el.temperature}
            />
          ))}
      </ul>
    </main>
  );
};

const mapState = (state) => {
  return {
    weather: state,
  };
};

const mapDispatch = {
  showWeather: getWeatherData,
};

export default connect(mapState, mapDispatch)(Weather);
