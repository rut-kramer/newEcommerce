import React from 'react'
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

// image
import productInCart from "../../../assets/img/xd/631e3939-9988-41b6-a6fe-d60206ab0582@2x.png";
import "./cart.css"
function CartPanel(props) {
    let products = [
        {
            name: "sari",
            price: "7677",
            amount: "2"
        },
        {
            name: "dd",
            price: "3",
            amount: "1"
        }
    ]
    return (
        <div className="cartPanal ml-5 mt-5">

            {/*row פה צריך לעשות לולאה שתציג את כל המוצרים בתוך  */}
            {products.map((item, index) => (
                <Row md="12 borderToProduct">
                    <Col md="3"><img src={productInCart}></img></Col>
                    <Col md="3">dddd</Col>
                    <Col md="3">+9-</Col>
                    <Col md="3">888$</Col>
                </Row>
            ))}
            <Row md="12 mt-4">
                <Col md="10 cartTotal">Total:</Col>
                <Col md="2">jj</Col>
            </Row>
            <Row md="12 mt-4 mb-4">
                <Col md="6"><button className="btnCartTotal ml-5">view/edit bag</button></Col>
                <Col md="6"><button className="btnCartTotal mr-5">checkout</button></Col>
            </Row>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        cart: state.cartReducer.cart,

    }
}
const mapDispatchToProps = (dispatch) => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(CartPanel);




