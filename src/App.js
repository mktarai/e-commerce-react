import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './@reducers/index';
import { loadState, saveState } from './@utils/localStorage';

import './App.css';

import Welcome from './Welcome';
import SignUp from './SignUp';
import Login from './Login';
import Restaurant from './Restaurant';
import RestaurantAdd from './Restaurant/Add';
import RestaurantSearch from './Restaurant/Search';
import Home from './Home';
import RestaurantMenu from './Restaurant/Menu';

const persistedState = loadState();
const store = createStore(rootReducer, persistedState);

store.subscribe(() => {
  console.log('Store modified');
  saveState(store.getState());
});

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/search" component={RestaurantSearch} />
          <Route path="/restaurant-list" component={Restaurant} />
          <Route path="/restaurant-add" component={RestaurantAdd} />
          <Route path="/restaurant-menu" component={RestaurantMenu} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/home" component={Home} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
