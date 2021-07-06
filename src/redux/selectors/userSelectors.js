import { createSelector } from 'reselect';

// MEMOIZATION USING RESELECT
const selectUser = state => state.user;
export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);
