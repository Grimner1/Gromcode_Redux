import React from "react";
import { Provider } from "react-redux";
import UsersList from "./users/UsersList";
import { users } from "./users";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <UsersList users={users} />
    </Provider>
  );
};

//sasas

export default App;
