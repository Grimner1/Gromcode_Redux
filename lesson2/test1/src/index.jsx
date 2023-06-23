import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import "./index.scss";
import App from "./App.jsx";

const rootElement = document.querySelector("#root");

const INCREMENT = "INCREMENT";
const DISCREMENT = "DISCREMENT";
const RESET = "RESET";

const increment = () => {
  type: INCREMENT;
};

const discrement = () => {
  type: DISCREMENT;
};

const reset = () => {
  type: RESET;
};

const counterReduce = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DISCREMENT":
      return state + 2;
    case "RESET":
      return (state = 0);
    default:
      return state;
  }
};

const store = createStore(counterReduce);
console.log(store.getState());

ReactDOM.render(<App />, rootElement);
