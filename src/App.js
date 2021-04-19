import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Login from "./components/login"
// import Home from "./components/home";
import PrivateRoute from './PrivateRoute.js';
import ProductNew from './components/store setting/product_management/newProduct';
import ProductEdit from './components/store setting/product_management/productEdit';
import Index from './components/index';
import Wrap from './components/wrap/wrap';
import CartPanel from "./components/store design/cart_page/cart_panel"
import Welcome from "./components/welcome"
import EditPaper from './components/store setting/paper_managment/editPaper'
import ShowPaper from './components/store setting/paper_managment/showPaper'
import CheckOut from './components/store design/check_out/checkOut'
import Upload from './components/modals/yeuditUploadImage';
import MediaGallery from './components/store design/media_gallery/mediaGallery'
// import Product from "./components/store design/product_page/product";
// import Cart from "./components/store design/cart";
import QuickLook from './components/store design/quickLook'
// import Upload from './components/modals/yeuditUploadImage'
//styles
import "./assets/css/bootstrap.min.css";
import "./assets/scss/now-ui-kit.scss";
import "./assets/demo/demo.css";
import "./assets/demo/react-demo.css";
import "./assets/demo/nucleo-icons-page-styles.css";
import { uploadImage } from './redux/middleware/crud';
import LoginHome from './components/new login/loginHome';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          {/* <div className="outFooter"> */}
          <Switch>
            {/* <Route exact path="/">
              <Welcome />
            </Route>
 */}
            <Route exact path="/">
              {/* <Home /> */}
              <LoginHome />
            </Route>
            <Route path="/cartPanal"><CartPanel /></Route>

            <Route exact path="/productNew">
              <ProductNew />
            </Route>
            <Route exact path="/productEdit">
              <ProductEdit />
            </Route>

            <Route exact path="/paper">
              <EditPaper></EditPaper>
            </Route>
            {/* <Route exact path="/admin/category/edit">
              <EditCategory />
            </Route>     */}

            <Route path="/mediaGallery">
              <MediaGallery />
            </Route>

          
            <Route exact path="/showPaper">
              <ShowPaper></ShowPaper>
            </Route>
            <Route path="/login">
              {/* <Login /> */}
              <LoginHome />
            </Route>
            <PrivateRoute path="/openStore" component={Welcome} />
            {/* <PrivateRoute path="/openStore" component={OpenStore} /> */}
            <PrivateRoute path="/home" component={Index} />
            {/* <Route path="/:comp" component={Wrap} /> */}
            <PrivateRoute path="/:comp" component={Wrap} />
          </Switch>
        </div>
      </Router>
    </Provider >);
}
export default App;