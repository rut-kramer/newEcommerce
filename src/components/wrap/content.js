import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import Bullcommerce from '../store design/bullcommerce';
import './wrap-component.css'
import AdminCurd from '../store setting/admin'
import Cart from '../store design/cart_page/cart';

import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import MainStoreRoutes from "../store design/store_page/mainStore"

function Content(props) {


    return (
        <div className="Content">
            <Switch>
                <Route path="/:storeName/admin" component={AdminCurd} />
                <MainStoreRoutes></MainStoreRoutes>
            </Switch>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
    }
}
const mapDispatchToProps = (dispatch) => ({
})
export default connect(mapStateToProps, mapDispatchToProps)
    (Content);
