// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.scss';
// import App from './App.jsx';

// const rootElement = document.querySelector('#root');

// ReactDOM.render(<App />, rootElement);

import store from "./store";
import { increment, decrement } from "../../test1/src/counter.actions";

console.log(store);

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());

console.log(store.getState());
