import React from "react";
import { connect } from "react-redux";
import * as usersListActions from "./usersList.actions";
import Pagination from "./Pagination";
import User from "./User";
import { usersListSelector, currentPageSelector } from "./users.selectors";

const UsersList = ({ users, currentPage, goPrev, goNext }) => {
  const itemsPerPage = 3;

  const itemsToRenderonOnePage = users.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <div>
      <Pagination
        goPrev={goPrev}
        goNext={goNext}
        itemsPerPage={itemsPerPage}
        totalItems={users.length}
        currentPage={currentPage}
      />

      <ul className="users">
        {itemsToRenderonOnePage.map((user) => (
          <User key={user.id} name={user.name} age={user.age} />
        ))}
      </ul>
    </div>
  );
};

const mapState = (state) => {
  return {
    users: usersListSelector(state),
    currentPage: currentPageSelector(state),
  };
};

const mapDispatch = {
  goPrev: usersListActions.goPrevPage,
  goNext: usersListActions.goNextPage,
};

const connector = connect(mapState, mapDispatch);

const ConnectedUsersList = connector(UsersList);

export default ConnectedUsersList;
