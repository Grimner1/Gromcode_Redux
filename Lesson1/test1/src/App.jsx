import React from "react";
import { useState } from "react";
import { themes, ThemeContext } from "./themes-context";

import ThemedButton from "./ThemeButton";

const App = () => {
  const [state, setState] = useState(themes.light);

  const toggleTheme = () => {
    const newTheme = state === themes.dark ? themes.light : themes.dark;
    setState(newTheme);
  };

  return (
    <div>
      <ThemeContext.Provider value={state}>
        <ThemedButton toggleTheme={toggleTheme} />
      </ThemeContext.Provider>
      <ThemedButton toggleTheme={toggleTheme} />
    </div>
  );
};

//sasas

export default App;
