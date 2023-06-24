const usersList = [];

const add = ({ id, name }, state) => {
  const newUser = { id, name };
  return [...state, newUser];
};

const del = (id, state) => {
  const userList = [...state];
  const userId = [...state].findIndex((el) => el.id == id);
  if (userId == -1) {
    alert("user ID not found");
    return userList;
  }
  userList.splice(userId, 1);
  return userList;
};

const userReducer = (state = usersList, action) => {
  switch (action.type) {
    case "ADDUSER":
      return add(action.userData, state);
    case "DELETEUSER":
      return del(action.id, state);
    default:
      return state;
  }
};

export default userReducer;
