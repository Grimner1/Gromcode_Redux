import { GO_PREV_PAGE, GO_NEXT_PAGE } from "./usersList.actions";
import users from "./users";

const initialState = {
  usersList: users,
  currentPage: 0,
};

const usersListReduser = (state = initialState, action) => {
  switch (action.type) {
    case GO_PREV_PAGE:
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };
    case GO_NEXT_PAGE:
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };

    default:
      return state;
  }
};

export default usersListReduser;
