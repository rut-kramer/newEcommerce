import React, { useEffect } from 'react';
import { actions } from '../../../redux/action';
import { connect } from 'react-redux';
// import cartReducer from '../redux/reducers/cartReducer';
import { useCookies } from "react-cookie";
import { Link, useHistory } from 'react-router-dom';
// import { Table, Container, Row, Col, Button,  Card, } from 'reactstrap';
import background from "../../../assets/img/login.jpg";
import ScrollTransparentNavbar from "../../navbars/ScrollTransparentNavbar.js";
import './cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ia006 from "../../../assets/img/xd/ia_300000006.png";
import cart from "../../../assets/img/xd/cart.svg"
import CheckOut from '../check_out/checkOut'


import {
        Table,
        Button,
        Card,
        CardHeader,
        CardBody,
        CardFooter,
        CardTitle,
        Collapse,
        Label,
        FormGroup,
        Input,
        Container,
        Pagination,
        PaginationItem,
        PaginationLink,
        InputGroupAddon,
        Row,
        Col,
        UncontrolledTooltip,
} from "reactstrap";




let flag = 1;

function Cart(props) {

        // const [cookies, setCookie] = useCookies(["order"]);
        let history = useHistory();
        // useEffect(() => {
        //         // props.setUser(props.user._id);
        //         // props.setStore(props.currentStore)
        //         let str = props.storeCurrent;
        //         let t = cookies[str];
        //         if ((flag === 1) && (t)) {
        //                 props.setCart(t)
        //                 flag = 2
        //         }
        // }, [])

        // window.addEventListener("beforeunload", (ev) => {
        //         ev.preventDefault();
        //         // let listOrder=cookies.listOrder
        //         // let cart= listFromCookies.find(c=>c.store==props.cart.store)
        //         // if(cart)
        //         // {

        //         // }
        //         // else
        //         // {
        //         //         listOrder.push(props.cart)
        //         //         setCookie("listOrder",listOrder, {
        //         //                  path: "/"
        //         //         });     
        //         // }
        //         setCookie(props.storeCurrent, props.cart, {
        //                 path: "/"
        //         });

        // });
        // function  save() {
        //         setCookie(props.storeCurrent,props.cart, {
        //                 path: "/"
        //               }); 
        // }
        // function  get() {
        //       let  str=props.storeCurrent;
        //       let t = cookies[str];
        // }

        // });


        const onSubmit = () => {
                let path = `/${props.objectFields.urlRoute}/checkOut`;
                history.push(path);
        }

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
                                <div>


                                        <br></br>
                                        <br></br>
                                        <br></br>
                                        <Link to={{ pathname: "/" + props.objectFields.urlRoute }}>
                                                Home Page
</Link>
                                        <label>/</label>
                                        <label color="inherit" >
                                                My Cart
</label>
                                </div>
                                <Row>
                                        <Col sm="12" md={{ size: 10, offset: 1 }}>
                                                <div className="main">
                                                        <div className="section cart">
                                                                {/* <button onClick={save}>save</button>
        <button onClick={get}>get</button> */}
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
                                                                                                                        <Button size="sm" onClick={async () => { await props.changeAmount({ index: index, amount: 1, plusOrMinus: "plus" }) }}>
                                                                                                                                <FontAwesomeIcon icon={['fas', 'plus']}>
                                                                                                                                </FontAwesomeIcon>
                                                                                                                        </Button>{' '}
                                                                                                                        {item.amount}{' '}
                                                                                                                        <Button size="sm" onClick={async () => { await props.changeAmount({ index: index, amount: 1, plusOrMinus: "minus" }) }}>
                                                                                                                                <FontAwesomeIcon icon={['fas', 'minus']}>
                                                                                                                                </FontAwesomeIcon>
                                                                                                                        </Button>
                                                                                                                </td>
                                                                                                                <td>{(item.amount * item.product.price).toFixed(2)}$</td>
                                                                                                                <td>
                                                                                                                        <Row>
                                                                                                                                <Col md="12">
                                                                                                                                        <Link to={{ pathname: `/${(props.objectFields.urlRoute ? props.objectFields.urlRoute : props.objectFields.storeName)}/product/${item.product.SKU}`, state: { product: item.product } }} style={{ color: "#212529" }}>
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
                                                                                                                <Link to={"/" + (props.objectFields.urlRoute ? props.objectFields.urlRoute : props.objectFields.storeName)}>
                                                                                                                        <Button outline size="sm">Continue Shopping</Button>{' '}
                                                                                                                </Link>
                                                                                                                <Link to={`/${props.objectFields.urlRoute}/checkOut`}>
                                                                                                                        <Button outline size="sm">Shop Now</Button>
                                                                                                                </Link>
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
                                                                                <Link to={"/" + (props.objectFields.urlRoute ? props.objectFields.urlRoute : props.objectFields.storeName)}>
                                                                                        <Button className="continueShop" outline size="sm">Back to shop</Button>{' '}
                                                                                </Link>
                                                                        </>}

                                                        </div>
                                                        <div className="section viewedProducts">
                                                                <h3 style={{ textAlign: 'center' }}>
                                                                        <b>Products you viewed</b></h3>
                                                                <div>
                                                                        <Row>
                                                                                {props.treeProduct.map((item, index) => (
                                                                                        <Col lg="4" md="6" sm="12" key={index}>
                                                                                                <Card className="card-product card-plain">
                                                                                                        <div className="card-image frameToProductView">
                                                                                                                <Link to={{ pathname: "/" + (props.objectFields.urlRoute ? props.objectFields.urlRoute : props.objectFields.storeName) + "/product/" + item.SKU, state: { product: item } }}>
                                                                                                                        <img className="imageProduct"
                                                                                                                                alt="..."
                                                                                                                                src={ia006}
                                                                                                                        ></img>
                                                                                                                </Link>
                                                                                                        </div>

                                                                                                        <CardBody>
                                                                                                                <br></br>
                                                                                                                <CardTitle className="card-title" tag="h4">{item.name}</CardTitle>
                                                                                                                <CardFooter>
                                                                                                                        <div className="price-container">
                                                                                                                                <span className="price">$ {item.price}</span>
                                                                                                                        </div>
                                                                                                                </CardFooter>
                                                                                                        </CardBody>

                                                                                                </Card>
                                                                                        </Col>
                                                                                ))}</Row></div>






                                                        </div>

                                                </div>
                                        </Col>
                                </Row>
                        </div>
                </>
        );
}

export default connect(
        (state) => {
                return {
                        cart: state.cartReducer.cart,
                        user: state.userReducer.user,
                        currentStore: state.storeReducer.currentStore,
                        objectFields: state.storeReducer.objectFields,
                        storeCurrent: state.storeReducer.objectFields._id,
                        treeProduct: state.productReducer.treeProduct,
                }
        },
        (dispatch) => {
                return {
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


