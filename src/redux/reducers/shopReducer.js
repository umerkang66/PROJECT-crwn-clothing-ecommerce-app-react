import { createSelector } from 'reselect';
import { INITIAL_STATE } from '../dataReducers/shopDataInitialState.js';

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

// MEMOIZATION OF SHOP REDUCER DATA USING RESELECT LIBRARY
const shopSelector = state => state.shop;
export const shopSelectorItems = createSelector(
  [shopSelector],
  shop => shop.shopData
);
export const shopCollectionSelector = collectionUrlParam => {
  return createSelector([shopSelectorItems], items =>
    items.find(item => item.id === COLLECTION_ID_MAP[collectionUrlParam])
  );
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default shopReducer;
