import { createSelector } from 'reselect';
import { UPDATE_SHOP_COLLECTIONS } from '../actionTypes.js';

// MEMOIZATION OF SHOP REDUCER DATA USING RESELECT LIBRARY
const shopSelector = state => state.shop;
// Multiple Collections
export const shopCollectionsSelector = createSelector(
  [shopSelector],
  shop => shop.collections
);
export const shopCollectionsArrSelector = createSelector(
  [shopCollectionsSelector],
  collections => (collections ? Object.values(collections) : [])
);
// Single Collection
export const shopCollectionSelector = collectionUrlParam => {
  return createSelector([shopCollectionsSelector], collections =>
    collections ? collections[collectionUrlParam] : null
  );
};

////////////////////////////////////
////////////////////////////////////

const INITIAL_STATE = {
  collections: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_SHOP_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
