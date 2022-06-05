const initialState = {
  numberOfUsers: 0
};
// factore this function
const stateController = (state, action) => {
  switch (action.type) {
    case 'userJoin':
      return { ...state, numberOfUsers: state.numberOfUsers + 1 };
    case 'userLeave':
      return { ...state, numberOfUsers: state.numberOfUsers - 1 };
    default:
      return state;
  }
};

export { initialState, stateController };
