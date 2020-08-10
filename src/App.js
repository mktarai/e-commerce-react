import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import SignUp from './SignUp';
import Login from './Login';
import Search from './Search';
import Restaurant from './Restaurant';
import RestaurantAdd from './Restaurant/Add';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/search" component={Search} />
      <Route path="/restaurant-list" component={Restaurant} />
      <Route path="/restaurant-add" component={RestaurantAdd} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
    </Router>
  );
}

export default App;
