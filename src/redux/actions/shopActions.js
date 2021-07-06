import {
  FETCH_SHOP_COLLECTIONS_FAILURE,
  FETCH_SHOP_COLLECTIONS_START,
  FETCH_SHOP_COLLECTIONS_SUCCESS,
} from '../actionTypes.js';

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.js';

export const fetchShopCollectionsStart = () => {
  return {
    type: FETCH_SHOP_COLLECTIONS_START,
  };
};

export const fetchShopCollectionsSuccess = collectionsMap => {
  return {
    type: FETCH_SHOP_COLLECTIONS_SUCCESS,
    payload: {
      collectionsMap,
    },
  };
};

export const fetchShopCollectionsFailure = errMessage => {
  console.log(errMessage);

  return {
    type: FETCH_SHOP_COLLECTIONS_FAILURE,
    payload: {
      errMessage,
    },
  };
};

export const fetchShopCollectionsStartAsync = () => async dispatch => {
  dispatch(fetchShopCollectionsStart());

  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = await collectionRef.get();
    if (!snapshot.size) throw new Error('Shop items did not find');

    const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    dispatch(fetchShopCollectionsSuccess(collectionsMap));
  } catch (err) {
    dispatch(fetchShopCollectionsFailure(err.message));
  }
};
