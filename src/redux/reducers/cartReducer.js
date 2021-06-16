import { TOGGLE_CARD_HIDDEN, ADD_ITEM } from '../actionTypes.js';
import { createSelector } from 'reselect';

// MEMOIZATION USING RESELECT
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
    default:
      return state;
  }
};

export default cartReducer;
