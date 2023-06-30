const SETUSER = "USER/SETUSER";
const REMOVEUSER = "USER/REMOVEUSER";

export const setUser = (userData) => {
  return {
    type: SETUSER,
    userData,
  };
};

export const removeUser = () => {
  return {
    type: REMOVEUSER,
  };
};
