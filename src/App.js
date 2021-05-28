import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header/Header.js';
import HomePage from './pages/homepage/HomePage.js';
import ShopPage from './pages/shop/Shop.js';
import SignInSignUpPage from './pages/signInSignUpPage/SignInSignUpPage';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/shop" component={ShopPage}></Route>
        <Route exact path="/signin" component={SignInSignUpPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
