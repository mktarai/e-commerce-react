import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Welcome from './Welcome';
import SignUp from './SignUp';
import Login from './Login';
import Search from './Search';
import Restaurant from './Restaurant';
import RestaurantAdd from './Restaurant/Add';
import Home from './Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/search" component={Search} />
        <Route path="/restaurant-list" component={Restaurant} />
        <Route path="/restaurant-add" component={RestaurantAdd} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/home" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
