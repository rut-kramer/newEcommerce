import React, { useState } from 'react'
import { actions } from "../../../redux/action"
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    Row,
    Col,
    Container,
    Table,
    Button
} from "reactstrap";

import productInCart from "../../../assets/img/xd/631e3939-9988-41b6-a6fe-d60206ab0582@2x.png";
import "./cart.css"
import { Link } from 'react-router-dom';
function CartPanel(props) {

    return (
        <Container>
            <Row onMouseLeave={() => props.cartPanal_close()}
            >
                <Col sm="12"
                    md={{ size: 10, offset: 1 }}
                    className="onlyProduct"
                >

                    {props.cart.products.map((item, index) => (
                        <>
                            <Row md="12 borderToProduct mt-4 " key={index}>
                                <Col md="3" style={{ width: "18px" }}><img src={productInCart}></img></Col>
                                <Col md="3">{item.product.name}</Col>
                                <Col md="3">
                                    <Button style={{ width: "1.5rem", height: "1.5rem", padding: 0 }}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            props.changeAmount({ index: index, amount: 1, plusOrMinus: "plus" })
                                        }}
                                    >
                                        <FontAwesomeIcon icon={['fas', 'plus']}>
                                        </FontAwesomeIcon>
                                    </Button>{' '}
                                    {item.amount}{' '}

                                    <Button style={{ width: "1.5rem", height: "1.5rem", padding: 0 }}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            props.changeAmount({ "index": index, amount: 1, "plusOrMinus": "minus" })
                                        }}
                                    >
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

    )
}
const mapStateToProps = (state) => {
    return {
        cart: state.cartReducer.cart,

    }
}
const mapDispatchToProps = (dispatch) => ({
    changeAmount: (e) => { dispatch(actions.changeAmount(e)) }


})
export default connect(mapStateToProps, mapDispatchToProps)(CartPanel);




