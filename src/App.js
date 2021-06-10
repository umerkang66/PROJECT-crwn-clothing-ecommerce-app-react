import React, { Component } from 'react';
import './App.scss';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/header/Header.js';
import HomePage from './pages/homepage/HomePage.js';
import ShopPage from './pages/shop/Shop.js';
import SignInSignUpPage from './pages/signInSignUpPage/SignInSignUpPage.js';
import { auth, createUserProfileDocument } from './firebase/firebase.js';

import { setCurrentUser } from './redux/actions/userActions.js';

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const createRef = await createUserProfileDocument(userAuth);

        createRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/shop" component={ShopPage}></Route>
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInSignUpPage />
              )
            }
          ></Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { user } = state;
  return {
    currentUser: user.currentUser,
  };
};

export default connect(mapStateToProps, { setCurrentUser })(App);
