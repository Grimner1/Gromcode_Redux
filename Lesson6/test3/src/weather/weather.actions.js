import { getCitiesInfo } from "./wetaher.gateway";

export const GET_WEATHER = "GET_WEATHER";
export const SHOW_WEATHER = "SHOW_WEATHER";

export const showWeather = (weatherData) => {
  return {
    type: SHOW_WEATHER,
    payload: {
      weatherData,
    },
  };
};

export const getWeatherData = () => {
  return function (dispatch) {
    getCitiesInfo().then((weatherData) => {
      dispatch(showWeather(weatherData));
    });
  };
};
