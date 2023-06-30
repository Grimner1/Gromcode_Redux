const SETLANGUAGE = "LANGUAGE/SETLANGUAGE";

export const setLanguage = (language) => {
  return {
    type: SETLANGUAGE,
    language,
  };
};
