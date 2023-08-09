import { createSelector } from "reselect";

export const usersListSelector = (state) => {
  return state.users.usersList;
};

export const filterTextSelector = (state) => {
  return state.users.filterText;
};

export const filteredTextSelector = createSelector(
  [usersListSelector, filterTextSelector],
  (users, filterText) => {
    return !filterText
      ? users
      : users.filter((user) =>
          user.name.toLowerCase().includes(filterText.toLowerCase())
        );
  }
);
