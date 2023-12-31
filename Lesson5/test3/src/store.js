import { createStore, combineReducers } from "redux";
import usersReduser from "./users/users.reduser";

const reduser = combineReducers({
  users: usersReduser,
});

const store = createStore(
  reduser,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
