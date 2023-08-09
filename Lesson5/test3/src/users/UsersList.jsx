import React from "react";
import { connect } from "react-redux";
import Filter from "./Filter";
import User from "./User";
import { filterTextSelector, filteredTextSelector } from "./users.selectors";
import { filterText } from "./users.actions";

const UsersList = ({ users, filterText, onChange, filtered }) => {
  return (
    <div>
      <Filter
        filterText={filterText}
        count={users.length}
        onChange={onChange}
      />
      <ul className="users">
        {users.map((user) => (
          <User key={user.id} name={user.name} age={user.age} />
        ))}
      </ul>
    </div>
  );
};

const mapState = (state) => {
  return {
    users: filteredTextSelector(state),
    filterText: filterTextSelector(state),
  };
};

const mapDispatch = {
  onChange: filterText,
};

const connector = connect(mapState, mapDispatch);

const ConnectedUsersList = connector(UsersList);

export default ConnectedUsersList;
