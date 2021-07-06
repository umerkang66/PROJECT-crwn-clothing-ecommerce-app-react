import { createSelector } from 'reselect';

// MEMOIZATION USING RESELECT LIBRARY
const directorySelector = state => state.directory;
export const selectDirectorySections = createSelector(
  [directorySelector],
  directory => directory.sections
);
