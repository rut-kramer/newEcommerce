import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HeaderNavbar from "../../navbars/ScrollTransparentNavbar"
import FooterOrange from "../footerOrange"
import Bullcommerce from '../bullcommerce';
import CategoryBullcommerce from "../categoryBullcommerceNew"
import Product from "../product_page/product";
import Cart from "../cart_page/cart";

function MainStore() {
    return (
        <div className="MainStore">
            <HeaderNavbar></HeaderNavbar>

            <Switch>
                <Route path="/:storeName/cart" component={Cart}></Route>
                <Route path="/:storeName/category/" component={CategoryBullcommerce}></Route>
                <Route path="/:storeName/product/:productSKU" component={Product}></Route>
                <Route path="/:storeName" component={Bullcommerce}></Route>
            </Switch>

            <FooterOrange></FooterOrange>
        </div>
    )
}


export default MainStore;
