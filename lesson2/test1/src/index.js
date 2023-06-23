import { createStore } from "redux";

const INCREMENT = "COUNTER/INCREMENT";
const DECREMENT = "COUNTER/DECREMENT";

export const increment = () => {
  type: INCREMENT;
};

export const discrement = () => {
  type: DECREMENT;
};

const counterReduce = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DISCREMENT":
      return state + 2;

    default:
      return state;
  }
};

export const store = createStore(counterReduce);
