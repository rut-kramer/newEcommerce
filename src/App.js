import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
import EditPaper  from './components/store setting/paper_managment/editPaper'
import ShowPaper  from './components/store setting/paper_managment/showPaper'

import Upload from './components/modals/yeuditUploadImage';

// import Product from "./components/store design/product_page/product";
// import Cart from "./components/store design/cart";
import QuickLook from './components/store design/quickLook'

//styles
import "./assets/css/bootstrap.min.css";
import "./assets/scss/now-ui-kit.scss";
import "./assets/demo/demo.css";
import "./assets/demo/react-demo.css";
import "./assets/demo/nucleo-icons-page-styles.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          {/* <div className="outFooter"> */}
          <Switch>

            <Route path="/upload" component={Upload} />

            {/* <Route exact path="/cart">
              <Cart />
            </Route> */}
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/quickLook">
              <QuickLook />
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
            <Route exact path="/paper">
            <EditPaper></EditPaper>
            </Route>
            <Route exact path="/showPaper">
            <ShowPaper></ShowPaper>
            </Route>

            <Route path="/login">
              <Login />
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