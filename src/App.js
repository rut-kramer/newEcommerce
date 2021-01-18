import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store'
// import $ from 'jquery';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/login"
import Home from "./components/home";
import OpenStore from "./components/openStore"
import PrivateRoute from './PrivateRoute.js';




function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/openStore" component={OpenStore} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
