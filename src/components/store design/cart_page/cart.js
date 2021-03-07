import React, { useEffect } from 'react';
import { actions } from '../../../redux/action';
import { connect } from 'react-redux';
// import cartReducer from '../redux/reducers/cartReducer';
import { useCookies } from "react-cookie";
import { Link, Redirect } from 'react-router-dom';
import { Table, Container, Row, Col, Button } from 'reactstrap';
import background from "../../../assets/img/login.jpg";
import ScrollTransparentNavbar from "../../navbars/ScrollTransparentNavbar.js";
import './cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

let flag = 1;

function Cart(props) {

        const [cookies, setCookie] = useCookies(["order"]);

        useEffect(() => {
                // props.setUser(props.user._id);
                // props.setStore(props.currentStore)
                let t = cookies.order;
                if ((flag === 1) && (t !== "undefined")) {
                        props.setCart(t)
                        flag = 2
                }
        }, [])

        window.addEventListener("beforeunload", (ev) => {
                ev.preventDefault();
                setCookie("order", props.cart, {
                        path: "/"
                });
        });

        // const onSubmit = () => {
        //         props.newOrder(props.cart)
        // }

        function calcTotalPrice() {
                var totalPrice = 0;
                props.cart.products.forEach(element => {
                        totalPrice += (element.amount * element.product.price);
                })
                props.setTotalPrice(totalPrice);
        }

        return (
                <>
                        <div className="wrapper">
                                <div className="main">
                                        <div className="section cart">

                                                <h3 style={{ textAlign: 'center' }}><b>My Shopping</b></h3>

                                                {(Array.isArray(props.cart.products) && props.cart.products.length) ?
                                                        <>
                                                                <Table hover>
                                                                        <thead className="tableHeader" >
                                                                                <tr>
                                                                                        <th><b>PRODUCT</b></th>
                                                                                        <th><b>PRICE</b></th>
                                                                                        <th><b>QUANTITY</b></th>
                                                                                        <th><b>TOTAL</b></th>
                                                                                        <th><b>ACTION</b></th>
                                                                                </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                                {props.cart.products.map((item, index) => (
                                                                                        <tr key={index}>
                                                                                                <td>
                                                                                                        <img alt="exp" src={background} style={{ height: "100px", width: "auto" }} />{"   "}
                                                                                                        <b>{item.product.name}</b>
                                                                                                </td>
                                                                                                <td>{item.product.price}</td>
                                                                                                <td className="calcAmount">
                                                                                                        <Button size="sm" onClick={async () => { await props.changeAmount({ "index": index, "plusOrMinus": "plus" }) }}>
                                                                                                                <FontAwesomeIcon icon={['fas', 'plus']}>
                                                                                                                </FontAwesomeIcon>
                                                                                                        </Button>{' '}
                                                                                                        {item.amount}{' '}
                                                                                                        <Button size="sm" onClick={async () => { await props.changeAmount({ "index": index, "plusOrMinus": "minus" }) }}>
                                                                                                                <FontAwesomeIcon icon={['fas', 'minus']}>
                                                                                                                </FontAwesomeIcon>
                                                                                                        </Button>
                                                                                                </td>
                                                                                                <td>{item.amount * item.product.price}$</td>
                                                                                                {/******item.amount * item.product.price */}
                                                                                                <td>
                                                                                                        <Row>
                                                                                                                <Col md="12">
                                                                                                                        <Link to={{ pathname: `/${props.objectFields.storeName}/product/${item.product.SKU}`, state: { product: item.product } }} style={{ color: "#212529" }}>
                                                                                                                                <FontAwesomeIcon className="clickIcon" icon={['fas', 'pencil-alt']} >
                                                                                                                                </FontAwesomeIcon>
                                                                                                                        </Link>
                                                                                                                </Col>
                                                                                                        </Row>
                                                                                                        <Row>
                                                                                                                <Col md="12">
                                                                                                                        <FontAwesomeIcon className="clickIcon" icon={['fas', 'trash']} onClick={async () => { await props.remove(item); calcTotalPrice() }}>
                                                                                                                        </FontAwesomeIcon>
                                                                                                                </Col>
                                                                                                        </Row>
                                                                                                </td>
                                                                                        </tr>
                                                                                ))}
                                                                        </tbody>
                                                                </Table>
                                                                <Container>
                                                                        <Row>
                                                                                <Col md="4">
                                                                                        <div className="cartButtons">
                                                                                                <Link to={"/" + props.objectFields.urlRoute}>
                                                                                                        <Button outline size="sm">Continue Shopping</Button>{' '}
                                                                                                </Link>
                                                                                                <Button outline size="sm">Shop Now</Button>
                                                                                        </div>
                                                                                </Col>
                                                                                <Col md="4"></Col>
                                                                                <Col md="4" className="sumTotal">
                                                                                        <div className="totalLine">
                                                                                                <Row>
                                                                                                        <Col md="6" style={{ color: "#707070" }}>SUB TOTAL</Col>
                                                                                                        <Col md="6">{props.cart.totalPrice}$</Col>
                                                                                                </Row>
                                                                                                <Row>
                                                                                                        <Col md="6" style={{ color: "#707070" }}>SHIPPING</Col>
                                                                                                        <Col md="6">100$</Col>
                                                                                                </Row>
                                                                                        </div>
                                                                                        <Row>
                                                                                                <Col md="6" style={{ color: "#707070" }}><b>TOTAL</b></Col>
                                                                                                <Col md="6"><b>{props.cart.totalPrice + 100}$</b></Col>
                                                                                        </Row>

                                                                                </Col>
                                                                        </Row>
                                                                </Container>
                                                        </>
                                                        : <>
                                                                <div>No items in your cart.</div>
                                                                <Link to={"/" + props.objectFields.urlRoute}>
                                                                        <Button className="continueShop" outline size="sm">Back to shop</Button>{' '}
                                                                </Link>
                                                        </>}

                                        </div>
                                        <div className="section viewedProducts">
                                                <h3 style={{ textAlign: 'center' }}><b>Products you viewed</b></h3>
                                        </div>

                                </div>
                        </div>
                </>
        );
}

export default connect(
        (state) => {
                return {
                        cart: state.cartReducer.cart,
                        user: state.userReducer.user,
                        objectFields: state.storeReducer.objectFields,
                }
        },
        (dispatch) => {
                return {
                        pluseAmount: (i) => { dispatch(actions.pluseAmount(i)) },
                        clear: () => { dispatch(actions.clear()) },
                        minuseAmount: (i) => { ; dispatch(actions.minuseAmount(i)) },
                        remove: (i) => { ; dispatch(actions.remove(i)) },
                        setCart: (e) => { dispatch(actions.setOrder(e)) },
                        newOrder: (e) => { dispatch(actions.newOrder(e)) },
                        updateSetOrder: (e) => { dispatch(actions.updateSetOrder(e)) },
                        setTotalPrice: (e) => { dispatch(actions.setTotalPrice(e)) },
                        setUser: (e) => { dispatch(actions.setUserOrder(e)) },
                        setStore: (e) => { dispatch(actions.setStore(e)) },
                        changeAmount: (e) => { dispatch(actions.changeAmount(e)) }
                }
        },
)(Cart);


