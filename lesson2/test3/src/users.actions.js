const ADD = "ADDUSER";
const DEL = "DELETEUSER";

export const addUser = (userData) => {
  return {
    type: ADD,
    userData,
  };
};

export const deleteUser = (id) => {
  return {
    type: DEL,
    id,
  };
};
