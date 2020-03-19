import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import './App.scss';

function App() {
  return (
    <Router>
      <MainNavigation />
      <div className="container">
        <Switch>
          <Route path="/" exact >
            <Users />
          </Route>
          <Route path="/places/new" exact >
            <NewPlace />
          </Route>
          <Redirect to="/"/>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
