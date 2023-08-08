import { createStore } from "redux";
import optionsReduser from "./options/options.reduser";

const store = createStore(optionsReduser);

export default store;
