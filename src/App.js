import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login"
import Home from "./components/home";
import OpenStore from "./components/openStore"
import PrivateRoute from './PrivateRoute.js';
import AddCategory from './components/store setting/category_managment/addCategory';
import AddProduct from './components/store setting/product_management/addProduct';
import EditProduct from './components/store setting/product_management/editProduct';
import EditCategory from './components/store setting/category_managment/editCategory';
import Index from './components/index';
import Wrap from './components/wrap/wrap';
import CartPanel from "./components/store design/cart_page/cart_panel"
// import loginHOme from "./components/loginHome"
//styles
import "./assets/css/bootstrap.min.css";
import "./assets/scss/now-ui-kit.scss";
import "./assets/demo/demo.css";
import "./assets/demo/react-demo.css";
import "./assets/demo/nucleo-icons-page-styles.css";
import LoginHome from './components/new login/loginHome';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          {/* <div className="outFooter"> */}
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/cartPanal"><CartPanel /></Route>

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
              {/* <Login /> */}
              <LoginHome />
            </Route>
            <PrivateRoute path="/openStore" component={OpenStore} />
            <PrivateRoute path="/home" component={Index} />
            <PrivateRoute path="/:comp" component={Wrap} />
          </Switch>
          {/* </div> */}
          {/* <footer className="footer" data-background-color="transparent" style={{
            // bottom: 0,
            // position: "fixed", width: "100%", 
            padding: 0
          }}>
            <a>ggg</a>
          </footer> */}

          {/* <footer className="footer" data-background-color="black" 
          style={{zIndex: 2237,width: "100%",position: "sticky",padding: "0px"}}>
        <div className="container"></div></footer> */}
          {/* position:sticky
להוריד פדינגים פנימיים בקישורים */}

          {/* position:fixed 
        bottom: 0,
      */}


          {/* import TopFooter from './components/topFooter' */}
          {/* <TopFooter></TopFooter> */}
        </div>
      </Router>
    </Provider >);
}
export default App;