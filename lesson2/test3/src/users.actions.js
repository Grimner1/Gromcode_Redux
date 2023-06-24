import { createStore } from "redux";

const ADD = "ADDUSER";
const DEL = "DELETEUSER";

export const addUser = (userData) => {
  return {
    type: ADD,
    userData,
  };
};

export const delUser = (id) => {
  return {
    type: DEL,
    id,
  };
};
