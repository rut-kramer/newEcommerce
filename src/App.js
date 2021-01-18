import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store'
// import $ from 'jquery';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



function App() {
  return (
    <Provider store={store}>
      <div className="App">

        <h2>hhhghghhghg</h2>
      </div>
    </Provider>

  );
}

export default App;
