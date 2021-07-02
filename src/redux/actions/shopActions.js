import { UPDATE_SHOP_COLLECTIONS } from '../actionTypes.js';

export const updateShopCollections = collectionsMap => {
  return {
    type: UPDATE_SHOP_COLLECTIONS,
    payload: collectionsMap,
  };
};
