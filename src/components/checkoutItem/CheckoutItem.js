import React from 'react';
import './CheckoutItem.scss';
import { connect } from 'react-redux';

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from '../../redux/actions/cartActions.js';

const CheckoutItem = ({ cartItem, clearItemFromCart, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity, id } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div onClick={() => removeItem(cartItem)} className="arrow">
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div onClick={() => addItem(cartItem)} className="arrow">
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div
        onClick={() => {
          clearItemFromCart(id);
        }}
        className="remove-button"
      >
        &#10005;
      </div>
    </div>
  );
};

export default connect(null, { clearItemFromCart, addItem, removeItem })(
  CheckoutItem
);
