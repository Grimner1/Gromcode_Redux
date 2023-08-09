export const FILTER_TEXT = "USERS/FILTER_TEXT";

export const filterText = (value) => {
  return {
    type: FILTER_TEXT,
    payload: value,
  };
};
