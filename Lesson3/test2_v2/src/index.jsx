// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.scss';
// import App from './App.jsx';

// const rootElement = document.querySelector('#root');

// ReactDOM.render(<App />, rootElement);

import store from "./counter";
import { increment, decrement } from "./counter";

console.log(store);

store.dispatch(increment());
store.dispatch(decrement());

console.log(store.getState());
