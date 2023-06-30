export const languageReducer = (state = "en", action) => {
  switch (action.type) {
    case "LANGUAGE/SETLANGUAGE":
      return (state = action.language);
    default:
      return state;
  }
};
