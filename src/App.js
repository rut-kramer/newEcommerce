import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login"
import Home from "./components/home";
import OpenStore from "./components/openStore"
import TopFooter from './components/topFooter'
import PrivateRoute from './PrivateRoute.js';
import Wrap from './components/wrap/wrap';



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
            <PrivateRoute path="/:comp" component={Wrap} />
          </Switch>
          <TopFooter></TopFooter>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
