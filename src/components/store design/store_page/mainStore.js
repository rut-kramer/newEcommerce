// import React, { Component } from 'react';
import React, { useEffect, useState } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import HeaderNavbar from "../../navbars/ScrollTransparentNavbar"
import FooterOrange from "../header_and_footer/footerOrange"
import Bullcommerce from '../bullcommerce';
import CategoryBullcommerce from "../category_page/categoryBullcommerceNew"
import Product from "../product_page/product";
import Cart from "../cart_page/cart";
import CheckOut from "../check_out/checkOut";
import QuickLook from '../quickLook'
import MediaGallery from "../media_gallery/mediaGallery"
import CartPanel from "../cart_page/cart_panel"
import '../quickLook.css'
import { actions } from "../../../redux/action"
import { connect } from 'react-redux';
import Editproduct from "../../store setting/product_management/productEdit";
function MainStore(props) {
    const [sideBarOpen, setSideBarOpen] = useState(false)
    const [quickLookProduct, setQuickLookProduct] = useState()
    const [cartPanelOpen, setCartPanelOpen] = useState(false)
    const [orderAmount, setOrderAmount] = useState(1)

    function w3_open(item) {
        setSideBarOpen(true)
        setQuickLookProduct(item)
    }
    function w3_close() {
        setSideBarOpen(false)
        setOrderAmount(1)
    }
    function cartPanal_open() {
        setCartPanelOpen(true)
    }
    function cartPanal_close() {
        setCartPanelOpen(false)
    }


    return (
        <div className="MainStore" onClick={() => {
            if (cartPanelOpen)
                cartPanal_close();
            if (sideBarOpen)
                w3_close()
        }} >
            <div
                className="w3-sidebar w3-bar-block w3-border-right"
                style={{
                    display:
                        sideBarOpen ? "block" : "none"
                }}
            >
                {quickLookProduct &&
                    <QuickLook
                        w3_close={w3_close}
                        currentProduct={quickLookProduct}
                        cartPanal_open={cartPanal_open}
                        orderAmount={orderAmount}
                        setOrderAmount={setOrderAmount}
                    ></QuickLook>}
            </div>

            <div className="cartPanal"
                style={{
                    display:
                        cartPanelOpen ? "block" : "none"

                }}>
                <CartPanel cartPanal_close={cartPanal_close}></CartPanel>

            </div>




            <HeaderNavbar cartPanal_open={cartPanal_open} cartPanal_close={cartPanal_close}></HeaderNavbar>
            <Switch>
                <Route path="/:storeName/checkout" component={CheckOut}></Route>
                <Route path="/:storeName/mediaGallery" component={MediaGallery}></Route>
                <Route path="/:storeName/cart" component={Cart}></Route>
                <Route path="/:storeName/category/:categoryName"><CategoryBullcommerce w3_open={w3_open} cartPanal_open={cartPanal_open}></CategoryBullcommerce></Route>
                <Route path="/:storeName/product/:productSKU" component={Product}></Route>
                <Route path="/:storeName/Editproduct/:productSKU" component={Editproduct}></Route>
                <Route path="/:storeName"><Bullcommerce w3_open={w3_open} cartPanal_open={cartPanal_open}
                ></Bullcommerce></Route>
                <Route path="/:storeName/mediaGallery" component={MediaGallery}></Route>

            </Switch>
            <FooterOrange></FooterOrange>
        </div >
    )
}


const mapStateToProps = (state) => {
    return {
        cart: state.cartReducer.cart,

    }
}
const mapDispatchToProps = (dispatch) => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(MainStore);
