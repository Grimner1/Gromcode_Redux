import { INCREMENT, DECREMENT, RESET } from "./counter.action";

const counterReducer = (store = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return store + 1;
    case DECREMENT:
      return store - 1;
    case RESET:
      return (store = 0);
    default:
      return store;
  }
};

export default counterReducer;
