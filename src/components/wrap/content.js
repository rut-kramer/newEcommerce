import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import Ecommerce from '../store design/Ecommerce';
import Bullcommerce from '../store design/bullcommerce';

import CategoryByFilter from '../store design/category_page/categoryByFilter'

import ProductPage from "../store design/product_page/productPage"
import './wrap-component.css'
import AdminCurd from '../store setting/admin'
import { connect } from 'react-redux';
import { Container } from 'reactstrap';

function Content(props) {
    function Temporary() {
        // return <Ecommerce></Ecommerce>
        return <div className="container-fluid">
            <Bullcommerce></Bullcommerce>
        </div>

    }

    return (
        <div className="Content">
            <Link to={"/" + props.objectFields.urlRoute + "/admin"}>admin</Link>
            {/* //זה אמור להיות שם מוצר דינאמי Saint_Laurent */}
            <Link to={"/" + props.objectFields.urlRoute + "/productPage/Saint_Laurent"}>product page</Link>
            <Switch>
                <Route path="/:storeName/productPage/Saint_Laurent" component={ProductPage} />
                <Route path="/filter-category" component={CategoryByFilter} />
                <Route path="/:storeName/admin" component={AdminCurd} />
                <Route path="/:storeName" component={Temporary} />

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
