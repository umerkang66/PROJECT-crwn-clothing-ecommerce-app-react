import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage.js';
import ShopPage from './pages/shop/Shop.js';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/shop" component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
