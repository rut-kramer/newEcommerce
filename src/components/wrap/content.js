import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import Bullcommerce from '../store design/bullcommerce';
import CategoryByFilter from '../store design/category_page/categoryByFilter'
import CategoryBullcommerce from "../store design/categoryBullcommerceNew"
// import ProductPage from "../store design/product_page/productPage"
import './wrap-component.css'
import AdminCurd from '../store setting/admin'
// import Cart from '../store design/cart';
import Product from '../store design/product_page/product';
import Dnd from '../navbars/yeuditDnd'
import Cart from '../store design/cart_page/cart';

import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import MainStoreRoutes from "../store design/store_page/mainStore"

function Content(props) {


    return (
        <div className="Content">
            <Link to={"/" + props.objectFields.urlRoute + "/admin"}>admin</Link>/
            <Link to={"/" + props.objectFields.storeName + "/cart"}>cart</Link>/

            <Link to={{ pathname: `/${props.objectFields.storeName}/product`, state: { product: props.product1 } }}>productPage</Link>
            /
            <Link to={"/dnd"}>Category dnd</Link>


            <Switch>
                <Route path="/dnd" component={Dnd} />

                <Route path="/filter-category" component={CategoryByFilter} />
                <Route path="/:storeName/admin" component={AdminCurd} />
                <Route path="/:storeName/cart" component={Cart} />
                <Route path="/:storeName/product" component={Product} />
                <Route path="/:storeName" component={Temporary} />

                {/* <Switch>
                <Route path="/:storeName/admin" component={AdminCurd} />
                <MainStoreRoutes></MainStoreRoutes> */}
            </Switch>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        objectFields: state.storeReducer.objectFields,
        product1: state.productReducer.currentProduct
    }
}
const mapDispatchToProps = (dispatch) => ({
})
export default connect(mapStateToProps, mapDispatchToProps)
    (Content);
