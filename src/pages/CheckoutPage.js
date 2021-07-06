import React from 'react';
import '../sass/pages/CheckoutPage.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectCartItems,
  selectCartTotal,
} from '../redux/selectors/cartSelectors.js';
import CheckoutItem from '../components/CheckoutItem.js';
import StripeCheckoutButton from '../components/StripeButton.js';

const Checkout = ({ cartItems, cartTotal }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}

      <div className="total">TOTAL: ${cartTotal}</div>
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br />
        <span className="test-warning__main-text">
          4242 4242 4242 4242 - EXP: 01/20 - CVV: 123
        </span>
      </div>
      <StripeCheckoutButton price={cartTotal} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);
