import React from "react";
import { useState } from "react";
import Header from "./Header";
import { userData, UserDataContext } from "./context";

const App = () => {
  const [state, setState] = useState(userData);

  return (
    <div className="page">
      <UserDataContext.Provider value={state}>
        <Header />
      </UserDataContext.Provider>
    </div>
  );
};

export default App;
