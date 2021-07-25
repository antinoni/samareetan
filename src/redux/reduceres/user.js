const initialState = {
  currentUser: null,
};

export const uder = (state = initialState, action) => {
  return {
    ...state,
    currentUser: action.currentUser,
  };
};
