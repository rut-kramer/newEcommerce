import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import Ecommerce from '../store design/Ecommerce';
import CategoryByFilter from '../store design/category_page/categoryByFilter';

import './wrap-component.css'
import AdminCurd from '../store setting/admin'
import Cart from '../store design/cart';
import Product from '../store design/product_page/product';

import { connect } from 'react-redux';

function Content(props) {
    function Temporary() {
        return <Ecommerce></Ecommerce>
        // <h3>לשים במקומי קומפוננטה</h3>
    }

    return (
        <div className="Content">
            <Link to={"/" + props.objectFields.urlRoute + "/admin"}>admin</Link>/
            <Link to={"/" + props.objectFields.storeName + "/cart"}>cart</Link>/

            <Link to={{ pathname: `/${props.objectFields.storeName}/product`, state: { product: props.product1 } }}>productPage</Link>
            /


            <Switch>
                <Route path="/filter-category" component={CategoryByFilter} />
                <Route path="/:storeName/admin" component={AdminCurd} />
                <Route path="/:storeName/cart" component={Cart} />
                <Route path="/:storeName/product" component={Product} />
                <Route path="/:storeName" component={Temporary} />

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

