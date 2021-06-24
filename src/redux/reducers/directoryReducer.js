import { createSelector } from 'reselect';
import { INITIAL_STATE } from '../dataReducers/directoryDataInitialState.js';

// MEMOIZATION USING RESELECT LIBRARY
const directorySelector = state => state.directory;
export const selectDirectorySections = createSelector(
  [directorySelector],
  directory => directory.sections
);

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default directoryReducer;
