import React from 'react';
import './CartIcon.scss';
import { connect } from 'react-redux';
import { toggleCardHidden } from '../../redux/actions/cartActions.js';

import { ReactComponent as ShoppingCartIcon } from '../../assets/shopping-bag.svg';

const CartIcon = ({ toggleCardHidden, cartItems }) => {
  return (
    <div onClick={toggleCardHidden} className="cart-icon">
      <ShoppingCartIcon className="shopping-icon" />
      <span className="item-count">{cartItems.length}</span>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cartItems: state.cart.cartItems,
  };
};

export default connect(mapStateToProps, { toggleCardHidden })(CartIcon);
