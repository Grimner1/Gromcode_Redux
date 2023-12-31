const initialState = { usersList: [] };

const add = (userData, state) => {
  return { usersList: [...state.usersList, userData] };
};

const deleteUs = (userId, state) => {
  return {
    usersList: [...state.usersList.filter((user) => user.id !== userId)],
  };
};

const update = (userId, userData, state) => {
  const newUserData = state.usersList.map((user) => {
    if (user.id == userId) {
      return { ...user, ...userData };
    } else {
      return user;
    }
  });

  return { usersList: newUserData };
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USERS/ADD_USER":
      return add(action.payload.userData, state);

    case "USERS/DELETE_USER":
      return deleteUs(action.payload.userId, state);

    case "USERS/UPDATE_USER":
      return update(action.payload.userId, action.payload.userData, state);

    default:
      return state;
  }
};
