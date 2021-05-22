import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage.js';

const NewPage = props => {
  console.log(props);
  const id = props.match.params.id;
  return <h1>Page No. {id}</h1>;
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/newpage/:id" component={NewPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
