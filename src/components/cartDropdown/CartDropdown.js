import React from 'react';
import './CartDropdown.scss';
import CustomButton from '../customButton/CustomButton.js';

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton>Go to Checkout</CustomButton>
    </div>
  );
};

export default CartDropdown;
