import React from "react";
import { useState } from "react";
import Header from "./Header";
import { userData, UserDataContext } from "./context";

const App = () => {
  const [state, setState] = useState({
    userData = {
      name: "Nikola Tesla",
      avatar_url: "https://avatars3.githubusercontent.com/u10001",
    };
  });

  return (
    <div className="page">
      <UserDataContext.Provider value={state}>
        <Header />
      </UserDataContext.Provider>
    </div>
  );
};

export default App;
