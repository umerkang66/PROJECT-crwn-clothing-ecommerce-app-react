export const addItemsToCart = (cartItems, newItem) => {
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

export const removeCartItemsFromCart = (cartItems, itemToDelete) => {
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
