import React from "react";
import { connect } from "react-redux";
import * as usersListActions from "./usersList.actions";
import Pagination from "./Pagination";
import User from "./User";

const UsersList = ({ usersList, currentPage, goPrev, goNext }) => {
  const itemPerPage = 3;

  const usersToRenderOnPage = usersList.slice(
    currentPage * itemPerPage,
    currentPage * itemPerPage + itemPerPage
  );

  return (
    <div>
      <Pagination
        goPrev={goPrev}
        goNext={goNext}
        itemPerPage={itemPerPage}
        totalItem={usersList.length}
        currentPage={currentPage}
      />

      <ul className="users">
        {usersToRenderOnPage.map((user, userIndex) => (
          <User key={user.id} user={user} userIndex={userIndex} />
        ))}
      </ul>
    </div>
  );
};

const mapState = (state) => {
  return {
    usersList: state.usersList,
    currentPage: state.currentPage,
  };
};

const mapDispatch = {
  goPrev: usersListActions.goPrevPage,
  goNext: usersListActions.goNextPage,
};

const connector = connect(mapState, mapDispatch);

const ConnectedUsersList = connector(UsersList);

export default ConnectedUsersList;
