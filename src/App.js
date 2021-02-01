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
import CrudCategory from './components/store setting/category_managment/crudCategory.js';
import CrudProducts from './components/store setting/product_management/crudProducts';
import AddCategory from './components/store setting/category_managment/addCategory';
import AddProduct from './components/store setting/product_management/addProduct';
import EditProduct from './components/store setting/product_management/editProduct';
import EditCategory from './components/store setting/category_managment/editCategory';
import CrudOrder from './components/store setting/crudOrder';

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
        
            <Route exact path="/admin/category/add">
            <AddCategory />
            </Route>
            <Route exact path="/admin/product/add">
            <AddProduct />
            </Route>
            <Route exact path="/admin/product/edit">
            <EditProduct />
            </Route>
            <Route exact path="/admin/category/edit">
            <EditCategory />
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
