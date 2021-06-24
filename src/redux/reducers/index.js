import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './userReducer.js';
import cartReducer from './cartReducer.js';
import directoryReducer from './directoryReducer.js';
import shopReducer from './shopReducer.js';

const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['cart'],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
