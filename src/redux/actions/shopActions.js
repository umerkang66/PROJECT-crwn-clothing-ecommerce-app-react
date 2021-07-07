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
    if (!snapshot.docs.length) throw new Error('⚠ Items did not found');

    const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    dispatch(fetchShopCollectionsSuccess(collectionsMap));
  } catch (err) {
    dispatch(fetchShopCollectionsFailure(err.message));
  }
};
