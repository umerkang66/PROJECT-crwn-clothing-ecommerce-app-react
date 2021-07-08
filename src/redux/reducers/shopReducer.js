import {
  FETCH_SHOP_COLLECTIONS_FAILURE,
  FETCH_SHOP_COLLECTIONS_START,
  FETCH_SHOP_COLLECTIONS_SUCCESS,
} from '../actionTypes.js';

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errMessage: '',
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SHOP_COLLECTIONS_START:
      return {
        ...state,
        errMessage: '',
        isFetching: true,
      };
    case FETCH_SHOP_COLLECTIONS_SUCCESS:
      return {
        ...state,
        collections: action.payload.collectionsMap,
        isFetching: false,
      };
    case FETCH_SHOP_COLLECTIONS_FAILURE:
      return {
        ...state,
        errMessage: action.payload.errMessage,
        collections: null,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default shopReducer;
