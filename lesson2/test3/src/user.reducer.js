const startState = { usersList: [] };

const add = ({ id, name }, state) => {
  const newUser = { id, name };
  return { usersList: [...state.usersList, newUser] };
};

const del = (id, state) => {
  const userList = [...state.usersList];
  const userId = [...state.usersList].findIndex((el) => el.id == id);
  if (userId == -1) {
    alert("user ID not found");
    return { usersList: userList };
  }
  userList.splice(userId, 1);
  console.log();
  return { usersList: userList };
};

const userReducer = (state = startState, action) => {
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
