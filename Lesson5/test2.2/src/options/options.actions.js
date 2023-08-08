export const TOGGLE_OPTION = "OPTIONS/TOGGLE_OPTION";

export const toggle_option = (optionId) => {
  return {
    type: TOGGLE_OPTION,
    payload: optionId,
  };
};
