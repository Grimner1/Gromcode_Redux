import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App.jsx";

const rootElement = document.querySelector("#root");

ReactDOM.render(<App />, rootElement);

// import store from "./store";
// import { increment, decrement, reset } from "./counter.actions";
// import { add_user, delete_user } from "./users.action";

// console.log(store);

// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(increment());
// store.dispatch(reset());
// store.dispatch(add_user({ id: 1, name: "Adam" }));
// store.dispatch(add_user({ id: 2, name: "Sally" }));
// store.dispatch(delete_user(2));

// console.log(store.getState());
