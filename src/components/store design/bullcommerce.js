import React from "react";
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
import ScrollTransparentNavbar from "../navbars/ScrollTransparentNavbar.js";
import EcommerceHeader from "../headers/EcommerceHeader.js";
import FooterOrange from "./footerOrange";

import { actions } from '../../redux/action';
import { connect } from 'react-redux';
import QuickLook from './quickLook'

//images

//xd image
import ia006 from "../../assets/img/xd/ia_300000006.png";
import cart from "../../assets/img/xd/cart.svg"
function Bullcommerce(props) {

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

    function w3_open() {
        document.getElementById("mySidebar").style.display = "block";
    }
    function w3_close() {
        debugger
        document.getElementById("mySidebar").style.display = "none";
    }

    return (
        <>
            <ScrollTransparentNavbar />
            <div className="wrapper">
                <Container fluid>
                    <EcommerceHeader />
                </Container>
                <div className="main">
                    <div className="section">
                        <Container>
                            <div className="w3-sidebar w3-bar-block w3-border-right" style={{ display: "none" }} id="mySidebar">
                                <button onclick={w3_close} className="w3-bar-item w3-large">Close &times;</button>
                                <QuickLook></QuickLook>
                            </div>
                            <Row className="heightRow">

                                {/*פה צריך לעשות לולאה שתשלוף את פיצר פרודקט */}
                                {props.featuredProducts[0] ? props.featuredProducts.map((item, index) => (
                                    <Col md="3" key={index}>

                                        <Card className="card-product card-plain">
                                            <div className="card-image Aheight">
                                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                    <img
                                                        alt="..."
                                                        src={ia006}
                                                    ></img>
                                                </a>
                                            </div>
                                            <CardBody>
                                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                    <CardTitle className="mt-2" tag="h4">

                                                        {item.name}</CardTitle>
                                                </a>

                                                <CardFooter>
                                                    <div className="price-container">
                                                        <span className="price">{item.price + " $"}</span>
                                                    </div>

                                                    <Button
                                                        className="btn-neutral btn-icon btn-round pull-right"
                                                        color="danger"
                                                        data-placement="left"
                                                        id="tooltip719224088"
                                                    >
                                                        {/* //אם רוצים להשתמש באיקון הזה צריך לקונות אותו */}
                                                        {/* <FontAwesomeIcon icon={['far', 'shopping-cart']}></FontAwesomeIcon> */}
                                                        <Link to="/"><img alt="...."
                                                            src={cart}></img></Link>
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
                                                        onClick={w3_open}
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
                <FooterOrange />
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
            featuredProducts: state.productReducer.featuredProducts
        }
    },
    (dispatch) => {
        return {
            filteredProducts: (p) => dispatch(actions.setFilteredItems(p)),
            setSliderMin: (x) => { dispatch(actions.setMinPrice(x)) },
            setSliderMax: (x) => { dispatch(actions.setMaxPrice(x)) },
            setFilteredItems: (x) => { dispatch(actions.setFilteredItems(x)) }
        }
    }
)(Bullcommerce);



