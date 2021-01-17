import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store'
import Footer from "./components/store design/header_and_footer/footer"
// import $ from 'jquery';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



function App() {
  return (
    // <Provider store={store}>
    <div className="App">
      <Router>
        <Switch>
          <Route path="/footer">
            <Footer />
          </Route>
        </Switch>
      </Router>
      <h2>hhhghghhghg</h2>
    </div>
    // </Provider>

  );
}

export default App;
