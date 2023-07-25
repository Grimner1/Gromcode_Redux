import { createStore, combineReducers } from "redux";
import usersReducer from "./users/users.reduser";

const reduser = combineReducers({
  users: usersReducer,
});

const store = createStore(
  reduser,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
