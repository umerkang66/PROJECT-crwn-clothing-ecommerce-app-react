import { combineReducers } from 'redux';
import userReducer from './userReducer.js';
import cartReducer from './cartReducer.js';

export default combineReducers({ user: userReducer, cart: cartReducer });
