import { createStore } from "redux";
import usersListReduser from "./users/usersList.reduser";

const store = createStore(usersListReduser);

export default store;
