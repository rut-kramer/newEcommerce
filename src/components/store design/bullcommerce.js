import React, { useEffect } from "react";
// import React, { useState } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardTitle,
    Container,
    Row,
    Col,
    UncontrolledTooltip,
} from "reactstrap";
import { Link } from "react-router-dom";

// core components
// import ScrollTransparentNavbar from "../navbars/ScrollTransparentNavbar.js";
import EcommerceHeader from "../headers/EcommerceHeader.js";
import './bullcommerce.css'
import { actions } from '../../redux/action';
import { connect } from 'react-redux';
// import QuickLook from './quickLook'
//xd image
import ia006 from "../../assets/img/xd/ia_300000006.png";
import cart from "../../assets/img/xd/cart.svg"
function Bullcommerce(props) {

    // const [sideBarOpen, setSideBarOpen] = useState(false)

    // const [quickLookProduct, setQuickLookProduct] = useState()

    // function w3_open(item) {
    //     setSideBarOpen(true)
    //     setQuickLookProduct(item)
    // }
    useEffect(() => {

        document.body.classList.add("ecommerce-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove("ecommerce-page");
            document.body.classList.remove("sidebar-collapse");
        };
    }, []);


    return (
        <>
            {/* <div
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
            </div> */}
            <div className="wrapper">
                <Container fluid>
                    <EcommerceHeader />
                </Container>
                <div className="main">
                    <div className="section">
                        <Container>

                            <Row className="heightRow">
                                {props.featuredProducts[0] ? props.featuredProducts.map((item, index) => (
                                    <Col md="3" key={index}>
                                        <Card className="card-product card-plain">
                                            <Link to={{ pathname: "/" + props.objectFields.urlRoute + "/product/" + item.SKU, state: { product: item } }}>

                                                <div className="card-image Aheight">
                                                    <img
                                                        alt="..."
                                                        src={ia006}
                                                    ></img>
                                                </div>
                                            </Link>
                                            <CardBody>
                                                <CardTitle className="mt-2" tag="h4">
                                                    {item.name}</CardTitle>
                                                <CardFooter>
                                                    <div className="price-container">
                                                        <span className="price">{item.price + " $"}</span>
                                                    </div>

                                                    <Button
                                                        className="btn-neutral btn-icon btn-round pull-right"
                                                        color="danger"
                                                        data-placement="left"
                                                        id="tooltip719224088"
                                                        onClick={() => props.addToCart(
                                                            {
                                                                "product": item,
                                                                "amount": 1
                                                            }
                                                        )}

                                                    >
                                                        {/* //אם רוצים להשתמש באיקון הזה צריך לקנות אותו */}
                                                        {/* <FontAwesomeIcon icon={['far', 'shopping-cart']}></FontAwesomeIcon> */}
                                                        <img alt="...."
                                                            src={cart}></img>
                                                    </Button>
                                                    <UncontrolledTooltip
                                                        delay={0}
                                                        placement="left"
                                                        target="tooltip719224088"
                                                    >
                                                        To Cart
                                                  </UncontrolledTooltip>
                                                    <Button
                                                        className="btn-neutral btn-icon btn-round pull-right"
                                                        color="danger"
                                                        data-placement="left"
                                                        id="tooltip719224089"
                                                        onClick={() => props.w3_open(item)}
                                                    >

                                                        <FontAwesomeIcon className="eye" icon={['far', 'eye']}></FontAwesomeIcon>

                                                    </Button>
                                                    <UncontrolledTooltip
                                                        delay={0}
                                                        placement="left"
                                                        target="tooltip719224089"
                                                    >
                                                        To View
                                                  </UncontrolledTooltip>

                                                </CardFooter>
                                            </CardBody>
                                        </Card>
                                    </Col>


                                )
                                ) : <h1>אין מוצרים מקודמים</h1>}

                            </Row>
                        </Container>
                        <button className="BtnGoToShop">GO TO SHOP</button>

                    </div>
                </div>
            </div >
        </>
    );
}

export default connect(
    (state) => {
        return {
            slideMin: state.filterReducer.minPrice,
            slideMax: state.filterReducer.maxPrice,
            products: state.productReducer.products,
            categories: state.categoriesReducer.categories,
            featuredProducts: state.productReducer.featuredProducts,
            objectFields: state.storeReducer.objectFields
        }
    },
    (dispatch) => {
        return {
            filteredProducts: (p) => dispatch(actions.setFilteredItems(p)),
            setSliderMin: (x) => { dispatch(actions.setMinPrice(x)) },
            setSliderMax: (x) => { dispatch(actions.setMaxPrice(x)) },
            setFilteredItems: (x) => { dispatch(actions.setFilteredItems(x)) },
            addToCart: (product) => { dispatch(actions.addToCart(product)) }

        }
    }
)(Bullcommerce);



