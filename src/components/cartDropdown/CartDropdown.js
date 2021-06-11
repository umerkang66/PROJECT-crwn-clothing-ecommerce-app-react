import React from 'react';
import './CartDropdown.scss';
import { connect } from 'react-redux';

import CustomButton from '../customButton/CustomButton.js';
import CartItem from '../cartItem/CartItem.js';

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>Go to Checkout</CustomButton>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cartItems: state.cart.cartItems,
  };
};

export default connect(mapStateToProps)(CartDropdown);
