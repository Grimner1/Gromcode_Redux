import store from "./store";
import { setLanguage } from "./language.actions";
import { addProduct, removeProduct } from "./cart.actions";
import { setUser, removeUser } from "./user.actions";

console.log(store);
store.dispatch(setLanguage("jp"));
store.dispatch(addProduct({ id: 1, name: "milk" }));
store.dispatch(addProduct({ id: 2, name: "meat" }));
store.dispatch(removeProduct(1));
store.dispatch(setUser({ name: "Bob" }));
store.dispatch(removeUser());
console.log(store.getState());
