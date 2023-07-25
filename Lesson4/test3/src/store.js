import { createStore, combineReducers } from "redux";
import counterReducer from "./counter.reducer";
import usersReducer from "./user.reducer";

const reducer = combineReducers({
  users: usersReducer,
  counter: counterReducer,
});

const store = createStore(reducer);

export default store;
