import React from 'react';
import './CartIcon.scss';
import { connect } from 'react-redux';
import { toggleCardHidden } from '../../redux/actions/cartActions.js';

import { ReactComponent as ShoppingCartIcon } from '../../assets/shopping-bag.svg';

const CartIcon = ({ toggleCardHidden }) => {
  return (
    <div onClick={toggleCardHidden} className="cart-icon">
      <ShoppingCartIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default connect(null, { toggleCardHidden })(CartIcon);
