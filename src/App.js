import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import './App.scss';

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/" exact >
            <Users />
          </Route>
          <Route path="/places/new" exact >
            <NewPlace />
          </Route>
          <Redirect to="/"/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
