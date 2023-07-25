import React, { Component } from "react";
import { connect } from "react-redux";
import store from "../store";
import * as userActions from "./users.actions";

const Users = ({ users, createUser, deleteUser }) => {
  const onUserCreate = () => {
    const id = Math.round(Math.random() * 1000000);
    const newUser = {
      id,
      name: `User # ${id}`,
    };

    createUser(newUser);
  };

  console.log(store.getState());
  return (
    <div className="users">
      <button className="users__create-btn" onClick={onUserCreate}>
        Create user
      </button>
      <ul className="users__list">
        {users.map((user) => (
          <li className="users__list-item" key={user.id}>
            {user.name}
            <button
              className="users__delete-btn"
              onClick={() => deleteUser(user.id)}
            >
              +
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapState = (state) => {
  return {
    users: state.users.usersList,
  };
};

const mapDispatch = {
  createUser: userActions.addUser,
  deleteUser: userActions.deleteUser,
};

const connector = connect(mapState, mapDispatch);

const ConnectedUsers = connector(Users);

export default ConnectedUsers;
