import { SHOW_WEATHER } from "./weather.actions";

// const initialData = {
//   weatherData: null,
// };

const weatherReducer = (state = null, action) => {
  switch (action.type) {
    case SHOW_WEATHER: {
      return {
        state: action.payload.weatherData,
      };
    }
    default:
      return state;
  }
};

export default weatherReducer;
