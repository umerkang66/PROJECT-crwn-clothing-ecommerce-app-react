import { createSelector } from 'reselect';

// MEMOIZATION OF SHOP REDUCER DATA USING RESELECT LIBRARY
const shopSelector = state => state.shop;

// IsFetching
export const shopIsFetchingSelector = createSelector(
  [shopSelector],
  shop => shop.isFetching
);

// Error Message
export const shopErrMessageSelector = createSelector(
  [shopSelector],
  shop => shop.errMessage
);

// Multiple Collections
export const shopCollectionsSelector = createSelector(
  [shopSelector],
  shop => shop.collections
);

// Multiple Collections Array
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
