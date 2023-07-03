import store from "./counter";
import { increment, decrement } from "./counter";

console.log(store);

store.dispatch(increment());
store.dispatch(decrement());

console.log(store.getState());
