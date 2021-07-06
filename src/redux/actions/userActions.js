import { SET_CURRENT_USER } from '../actionTypes.js';

export const setCurrentUser = user => {
  return {
    type: SET_CURRENT_USER,
    payload: {
      user,
    },
  };
};
