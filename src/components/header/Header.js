import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown-logo.svg';
import { auth } from '../../firebase/firebase.js';

const Header = ({ currentUser }) => {
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
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser,
  };
};

export default connect(mapStateToProps, {})(Header);
