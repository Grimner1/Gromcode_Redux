// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.scss';
// import App from './App.jsx';

// const rootElement = document.querySelector('#root');

// ReactDOM.render(<App />, rootElement);

import store from "./store";
import { increment, decrement, reset } from "./counter.actions";
import { addUser, deleteUser, updateUser } from "./users.actions";

const user1 = { id: 1, name: "Fill" };
const user2 = { id: 2, name: "Fill-Meteor" };

console.log(store);

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
// store.dispatch(reset());

store.dispatch(addUser(user1));
store.dispatch(addUser(user2));
// store.dispatch(deleteUser(1));
// store.dispatch(deleteUser(2));
store.dispatch(updateUser(2, { name: "Klara" }));
// store.dispatch(addUser(user1));

console.log(store.getState());
