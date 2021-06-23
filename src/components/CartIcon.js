import React from 'react';
import '../sass/components/CartIcon.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCardHidden } from '../redux/actions/cartActions.js';
import { ReactComponent as ShoppingCartIcon } from '../assets/shopping-bag.svg';
import { selectCartItemsCount } from '../redux/reducers/cartReducer.js';

const CartIcon = ({ toggleCardHidden, totalQuantity }) => {
  return (
    <div onClick={toggleCardHidden} className="cart-icon">
      <ShoppingCartIcon className="shopping-icon" />
      <span className="item-count">{totalQuantity}</span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  totalQuantity: selectCartItemsCount,
});

export default connect(mapStateToProps, { toggleCardHidden })(CartIcon);
