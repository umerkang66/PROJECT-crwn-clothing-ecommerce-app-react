import React, { Component } from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header/Header.js';
import HomePage from './pages/homepage/HomePage.js';
import ShopPage from './pages/shop/Shop.js';
import SignInSignUpPage from './pages/signInSignUpPage/SignInSignUpPage.js';
import { auth, createUserProfileDocument } from './firebase/firebase.js';

class App extends Component {
  state = { currentUser: null };
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const createRef = await createUserProfileDocument(userAuth);

        createRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/shop" component={ShopPage}></Route>
          <Route exact path="/signin" component={SignInSignUpPage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
