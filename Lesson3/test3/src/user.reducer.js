export const usersReducer = (state = null, action) => {
  switch (action.type) {
    case "USER/SETUSER":
      return (state = action.userData);
    case "USER/REMOVEUSER":
      return (state = null);
    default:
      return state;
  }
};
