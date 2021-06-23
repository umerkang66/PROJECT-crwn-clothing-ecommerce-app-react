import React from 'react';
import '../sass/components/Header.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../assets/crown-logo.svg';
import { createStructuredSelector } from 'reselect';

import { auth } from '../firebase/firebase.js';
import CartIcon from './CartIcon.js';
import CartDropdown from './CartDropdown.js';
import { selectCartHidden } from '../redux/reducers/cartReducer.js';
import { selectCurrentUser } from '../redux/reducers/userReducer.js';

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div
            className="option option__sign option__sign--out"
            onClick={() => auth.signOut()}
          >
            SIGN OUT
          </div>
        ) : (
          <Link className="option option__sign option__sign--in" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps, {})(Header);
