import { createSelector } from 'reselect';
import { INITIAL_STATE } from '../dataReducers/shopDataInitialState.js';

// MEMOIZATION OF SHOP REDUCER DATA USING RESELECT LIBRARY
const shopSelector = state => state.shop;
export const shopItemsSelector = createSelector(
  [shopSelector],
  shop => shop.shopData
);
export const shopItemsArrSelector = createSelector([shopItemsSelector], items =>
  Object.values(items)
);
export const shopCollectionSelector = collectionUrlParam => {
  return createSelector(
    [shopItemsSelector],
    items => items[collectionUrlParam]
  );
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default shopReducer;
