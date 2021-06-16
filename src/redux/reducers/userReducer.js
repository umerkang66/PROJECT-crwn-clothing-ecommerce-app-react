import { createSelector } from 'reselect';
import { SET_CURRENT_USER } from '../actionTypes.js';

// MEMOIZATION USING RESELECT
const selectUser = state => state.user;
export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return { ...state, currentUser: action.payload };
    default:
      return state;
  }
};

export default userReducer;
