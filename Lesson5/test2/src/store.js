import { createStore, combineReducers } from "redux";
import optionsReduser from "./options/options.reduser";

const reduser = combineReducers({
  options: optionsReduser,
});

const store = createStore(
  reduser,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
