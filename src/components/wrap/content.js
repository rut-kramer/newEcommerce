import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import Bullcommerce from '../store design/bullcommerce';
import CategoryByFilter from '../store design/category_page/categoryByFilter'
import CategoryBullcommerce from "../store design/categoryBullcommerceNew"
// import ProductPage from "../store design/product_page/productPage"
import './wrap-component.css'
import AdminCurd from '../store setting/admin'
import Cart from '../store design/cart_page/cart';

import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import MainStoreRoutes from "../store design/store_page/mainStore"

function Content(props) {
    function Temporary() {
        return <div className="container-fluid">
            {/* <Bullcommerce></Bullcommerce> */}
            <CategoryBullcommerce></CategoryBullcommerce>
        </div>

    }

    return (
        <div className="Content">
            <Link to={"/" + props.objectFields.urlRoute + "/admin"}>admin</Link>/
            {/* //זה אמור להיות שם מוצר דינאמי Saint_Laurent */}
            {/* <Link to={"/" + props.objectFields.urlRoute + "/productPage/Saint_Laurent"}>product page</Link> */}
            <Switch>
                {/* <Route path="/:storeName/productPage/Saint_Laurent" component={ProductPage} />
                <Route path="/filter-category" component={CategoryByFilter} />
                <Route path="/:storeName/cart" component={Cart} />
                <Route path="/:storeName" component={Temporary} /> */}
                <Route path="/:storeName/admin" component={AdminCurd} />

                <MainStoreRoutes></MainStoreRoutes>
            </Switch>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        objectFields: state.storeReducer.objectFields,
    }
}
const mapDispatchToProps = (dispatch) => ({
})
export default connect(mapStateToProps, mapDispatchToProps)
    (Content);
