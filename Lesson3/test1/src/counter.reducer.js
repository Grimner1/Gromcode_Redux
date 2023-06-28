import { increment, decrement, reset } from "./counter.actions";

export const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "COUNTER/INCREMENT":
      return state + 1;

    case "COUNTER/DECREMENT":
      return state - 1;

    case "COUNTER/RESET":
      return (state = 0);

    default:
      return state;
  }
};
