import {
  TOGGLE_CARD_HIDDEN,
  ADD_ITEM,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM,
} from '../actionTypes.js';
import { createSelector } from 'reselect';

// MEMOIZATION USING RESELECT LIBRARY
const selectCart = state => state.cart;
export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);
export const selectCartTotal = createSelector([selectCartItems], cartItems =>
  cartItems.reduce(
    (acc, cartItem) => acc + cartItem.quantity * cartItem.price,
    0
  )
);

const addItemsToCart = (cartItems, newItem) => {
  const existingCart = cartItems.find(cartItem => cartItem.id === newItem.id);

  if (existingCart) {
    return cartItems.map(cartItem =>
      cartItem.id === newItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...newItem, quantity: 1 }];
};

const removeCartItemsFromCart = (cartItems, itemToDelete) => {
  const existingCart = cartItems.find(
    cartItem => cartItem.id === itemToDelete.id
  );

  if (existingCart.quantity === 1)
    return cartItems.filter(cartItem => cartItem.id !== itemToDelete.id);

  return cartItems.map(cartItem => {
    return cartItem.id === itemToDelete.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem;
  });
};

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CARD_HIDDEN:
      return { ...state, hidden: !state.hidden };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemsToCart(state.cartItems, action.payload),
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeCartItemsFromCart(state.cartItems, action.payload),
      };
    case CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
