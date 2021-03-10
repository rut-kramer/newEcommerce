// import React, { Component } from 'react';
import React, { useEffect, useState } from 'react';

import { Switch, Route, Link } from "react-router-dom";
import HeaderNavbar from "../../navbars/ScrollTransparentNavbar"
import FooterOrange from "../header_and_footer/footerOrange"
import Bullcommerce from '../bullcommerce';
import CategoryBullcommerce from "../category_page/categoryBullcommerceNew"
import Product from "../product_page/product";
import Cart from "../cart_page/cart";
import CheckOut from "../checkout_page/checkOut";
import QuickLook from '../quickLook'
import UploadImages from "../upload_images/uploadImages"
import { Table, Container, Row, Col, Button } from 'reactstrap';
import '../quickLook.css'
import { actions } from "../../../redux/action"
import { connect } from 'react-redux';
import productInCart from "../../../assets/img/xd/631e3939-9988-41b6-a6fe-d60206ab0582@2x.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MainStore(props) {
    const [sideBarOpen, setSideBarOpen] = useState(false)
    const [quickLookProduct, setQuickLookProduct] = useState()
    const [cartPanelOpen, setCartPanelOpen] = useState(false)

    function w3_open(item) {
        setSideBarOpen(true)
        setQuickLookProduct(item)
    }

    function w3_close() {
        setSideBarOpen(false)
    }

    function cartPanal_open() {
        setCartPanelOpen(true)
    }
    function cartPanal_close() {
        setCartPanelOpen(false)
    }


    return (
        <div className="MainStore" onClick={() => {
            if(cartPanelOpen) 
             cartPanal_close();
            if(sideBarOpen)
             w3_close()
             }} >
            <div
                className="w3-sidebar w3-bar-block w3-border-right"
                style={{
                    display:
                        sideBarOpen ? "block" : "none"
                }}
            >
                {quickLookProduct ?
                    <QuickLook 
                        w3_close={w3_close}   
                        currentProduct={quickLookProduct}
                        cartPanal_open={cartPanal_open}
                    ></QuickLook> : ""}
            </div>

            <div className="cartPanal ml-5 mt-5"
                style={{
                    display:
                        cartPanelOpen ? "block" : "none"
                }}>
                <Container>

                    <Row>
                        <Col sm="12"
                            md={{ size: 10, offset: 1 }}
                            className="onlyProduct"
                        >

                            {props.cart.products.map((item, index) => (
                                <>
                                    <Row md="12 borderToProduct mt-4 ">
                                        <Col md="3" style={{ width: "18px" }}><img src={productInCart}></img></Col>
                                        <Col md="3">{item.product.name}</Col>
                                        <Col md="3">
                                            <Button style={{ width: "1.5rem", height: "1.5rem", padding: 0 }} onClick={async () => { await props.changeAmount({ "index": index, "plusOrMinus": "plus" }) }}>
                                                <FontAwesomeIcon icon={['fas', 'plus']}>
                                                </FontAwesomeIcon>
                                            </Button>{' '}
                                            {item.amount}{' '}
                                            <Button style={{ width: "1.5rem", height: "1.5rem", padding: 0 }}
                                                onClick={async () => { await props.changeAmount({ "index": index, "plusOrMinus": "minus" }) }}>
                                                <FontAwesomeIcon icon={['fas', 'minus']}>
                                                </FontAwesomeIcon>
                                            </Button>
                                        </Col>
                                        <Col md="3">{item.product.price * item.amount}</Col>
                                    </Row>
                                </>
                            ))}


                        </Col>
                        <Col sm="12"
                            md={{ size: 10, offset: 1 }}>
                            <Row md="12 mt-4">
                                <Col md="9" className="cartTotal">Total:
                                     
                                </Col>
                                <Col md="3" className="pr-5">{props.cart.totalPrice}</Col>
                            </Row>

                            <Row md="12 mt-4 mb-2">
                                <Col md="6"><Link to="/:storeName/cart"><button className="btnCartTotal ml-5" >view/edit bag</button></Link></Col>
                                <Col md="6"><Link to="/:storeName/checkout"><button className="btnCartTotal mr-5" >checkout</button></Link></Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>

            <HeaderNavbar></HeaderNavbar>
            <Switch>
                <Route path="/:storeName/checkout" component={CheckOut}></Route>
                <Route path="/:storeName/uploadImages" component={UploadImages}></Route>
                <Route path="/:storeName/cart" component={Cart}></Route>
                <Route path="/:storeName/category/"><CategoryBullcommerce w3_open={w3_open} cartPanal_open={cartPanal_open}></CategoryBullcommerce></Route>
                <Route path="/:storeName/product/:productSKU" component={Product}></Route>
                <Route path="/:storeName"><Bullcommerce w3_open={w3_open} cartPanal_open={cartPanal_open}
                ></Bullcommerce></Route>

            </Switch>
            <FooterOrange></FooterOrange>
        </div >
    )
        }


// export default MainStore;
const mapStateToProps= (state) => {
        return {
            cart: state.cartReducer.cart,

        }
    }
    const mapDispatchToProps = (dispatch) => ({
        changeAmount: (e) => { dispatch(actions.changeAmount(e)) }

    })
    export default connect(mapStateToProps, mapDispatchToProps)(MainStore);
