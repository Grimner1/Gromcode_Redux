import store from "./store";
import { addUser, deleteUser } from "./users.actions";

const user1 = {
  id: 76,
  name: "Sarah",
};

const user2 = {
  id: 21,
  name: "Jude",
};

const user3 = {
  id: 3,
  name: "Ya-Ya",
};

console.log(store);
store.dispatch(addUser(user1));
store.dispatch(addUser(user2));
store.dispatch(addUser(user3));
store.dispatch(deleteUser(76));
store.dispatch(deleteUser(3));
store.dispatch(deleteUser(33));
console.log(store.getState());
