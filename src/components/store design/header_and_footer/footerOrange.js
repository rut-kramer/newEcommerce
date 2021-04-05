/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components
import { connect } from "react-redux";
import { actions } from "../../../redux/action";

function FooterOrange(props) {
    return (
        <>
            <footer className="footer colorFooter"
            //  data-background-color="orange"
            >
                <Container>
                    {/* <div className="content"> */}
                    <Row className="d-flex justify-content-between">
                        <Col >
                            <h5>פרטי החנות</h5>
                            <ul className="mt-2 links-vertical size" >
                                <li>
                                    <a
                                        className="text-muted"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >

                                        {props.objectFields.storeName}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-muted"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        {props.objectFields.tel}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-muted"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        {props.objectFields.email}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-muted"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        {props.objectFields.address}
                                    </a>
                                </li>
                            </ul>
                        </Col>
                        <Col >
                            {/* <Link to={"/" + (props.objectFields.urlRoute ? props.objectFields.urlRoute : props.objectFields.storeName) + "/category/allCategories"}> */}

                            <h5>Categories</h5>
                            {/* </Link> */}
                            <ul className="mt-2 links-vertical size">
                                <li>
                                    <a
                                        className="text-muted"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        About Us
                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-muted"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        How to Register
                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-muted"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        Sell Goods
                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-muted"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        Receive Payment
                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-muted"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        Transactions
                    </a>
                                </li>

                            </ul>
                        </Col>
                        <Col>
                            <h5>Element</h5>
                            <ul className="mt-2 links-vertical size">
                                <li>
                                    <a
                                        className="text-muted"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        About Us
                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-muted"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        How to Register
                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-muted"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        Sell
                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-muted"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        Receive
                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-muted"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        Transactions
                    </a>
                                </li>

                            </ul>
                        </Col>
                        <Col>
                            <h5>Help</h5>
                            <ul className="mt-2 links-vertical size">
                                <li>
                                    <a
                                        className="text-muted"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        About Us
                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-muted"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        How to Register
                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-muted"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        Sell
                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-muted"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        Receive
                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-muted"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        Transactions
                    </a>
                                </li>

                            </ul>
                        </Col>
                    </Row>
                    {/* </div> */}
                    {/* <hr></hr> */}
                    {/* <div className="copyright" id="copyright">
                        © {new Date().getFullYear()}, Designed by{" "}
                        <a
                            href="https://www.invisionapp.com?ref=creativetim"
                            target="_blank"
                        >
                            Invision
            </a>
            . Coded by{" "}
                        <a
                            href="https://www.creative-tim.com?ref=nuk-pro-react-footer-black-social"
                            target="_blank"
                        >
                            Creative Tim
            </a>
            .
          </div> */}
                </Container>
            </footer>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        objectFields: state.storeReducer.objectFields,
    }
}
const mapDispatchToProps = (dispatch) => ({
})
export default connect(mapStateToProps, mapDispatchToProps)(FooterOrange);