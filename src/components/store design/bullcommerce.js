import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

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

// core components
import { actions } from '../../redux/action';
import { connect } from 'react-redux';
import EcommerceHeader from "../headers/EcommerceHeader.js";
import './bullcommerce.css'

//xd image
import ia006 from "../../assets/img/xd/ia_300000006.png";
import cart from "../../assets/img/xd/cart.svg"
function Bullcommerce(props) {
    //useEffect לבדוק האם למחוק את כל ה 
    React.useEffect(() => {

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
                                            <Link to={"/" + props.objectFields.urlRoute + "/product/" + item.SKU}>
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
                                                                "product": {
                                                                    "amount": 4,
                                                                    "price": 450,
                                                                    "images": [],
                                                                    "attributes": [
                                                                        "6021297fb7ce77e4d5b3e8cf"
                                                                    ],
                                                                    "featured": false,
                                                                    "_id": "602babe3c8336e62cd3d5f2e",
                                                                    "name": "Simcha dress",
                                                                    "description": "to wedding",
                                                                    "SKU": "7786754614",
                                                                    "category": "601bec7cbf7ea1c3829cd18b",
                                                                    "store": "6012b0300718f71a8fa25df5",
                                                                },
                                                                "amount": 1
                                                            }
                                                        )}

                                                    >
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
            products: state.productReducer.products,
            categories: state.categoriesReducer.categories,
            featuredProducts: state.productReducer.featuredProducts,
            objectFields: state.storeReducer.objectFields
        }
    },
    (dispatch) => {
        return {
            setFilteredItems: (x) => { dispatch(actions.setFilteredItems(x)) },
            addToCart: (product) => { dispatch(actions.addToCart(product)) }

        }
    }
)(Bullcommerce);



