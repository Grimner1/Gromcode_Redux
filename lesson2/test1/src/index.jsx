import { createStore } from "redux";

const INCREMENT = "COUNTER/INCREMENT";
const DECREMENT = "COUNTER/DECREMENT";

export const increment = () => {
  return { type: INCREMENT };
};

export const decrement = () => {
  return { type: DECREMENT };
};

const counterReduce = (state = 0, action) => {
  switch (action.type) {
    case "COUNTER/INCREMENT":
      return state + 1;
    case "COUNTER/DECREMENT":
      return state + 2;
    default:
      return state;
  }
};

export const store = createStore(counterReduce);
