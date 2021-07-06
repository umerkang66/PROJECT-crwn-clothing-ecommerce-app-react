import { INITIAL_STATE } from '../dataReducers/directoryDataInitialState.js';

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default directoryReducer;
