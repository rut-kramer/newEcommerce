// import React, { Component } from 'react';
import React, { useState } from 'react';

import { Switch, Route } from "react-router-dom";
import HeaderNavbar from "../../navbars/ScrollTransparentNavbar"
import FooterOrange from "../header_and_footer/footerOrange"
import Bullcommerce from '../bullcommerce';
import CategoryBullcommerce from "../category_page/categoryBullcommerceNew"
import Product from "../product_page/product";
import Cart from "../cart_page/cart";
import CheckOut from "../checkout_page/checkOut";
import QuickLook from '../quickLook'
import MediaGallery from "../media_gallery/mediaGallery"

function MainStore() {
    const [sideBarOpen, setSideBarOpen] = useState(false)
    const [quickLookProduct, setQuickLookProduct] = useState()

    function w3_open(item) {
        setSideBarOpen(true)
        setQuickLookProduct(item)
    }

    return (
        <div className="MainStore">
            <div
                className="w3-sidebar w3-bar-block w3-border-right"
                style={{
                    display:
                        sideBarOpen ? "block" : "none"
                }}
            >
                {quickLookProduct ?
                    <QuickLook sideBarOpenORclose={setSideBarOpen}
                        currentProduct={quickLookProduct}
                    ></QuickLook> : ""}
            </div>
            <HeaderNavbar></HeaderNavbar>

            <Switch>
                <Route path="/:storeName/checkout" component={CheckOut}></Route>
                <Route path="/:storeName/mediaGallery" component={MediaGallery}></Route>
                <Route path="/:storeName/cart" component={Cart}></Route>
                <Route path="/:storeName/category/" component={CategoryBullcommerce}></Route>
                <Route path="/:storeName/product/:productSKU" component={Product}></Route>
                <Route path="/:storeName"><Bullcommerce w3_open={w3_open}></Bullcommerce></Route>

            </Switch>

            <FooterOrange></FooterOrange>
        </div>
    )
}


export default MainStore;
