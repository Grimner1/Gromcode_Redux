import React from "react";
import { Provider } from "react-redux";
import SearchField from "./users/SearchField";
import UserInfo from "./users/UserInfo";
import store from "./store";
import Spinner from "./users/Spinner";

const App = () => {
  return (
    <Provider store={store}>
      <div className="page">
        <UserInfo />

        <SearchField />
      </div>
    </Provider>
  );
};

//sasas

export default App;
