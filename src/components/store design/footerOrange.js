/*eslint-disable*/
import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function FooterOrange() {
    return (
        <>
            <footer className="footer colorFooter"
            //  data-background-color="orange"
            >
                <Container>
                    <div className="content">
                        <Row>
                            <Col md="5">
                                <h5>MAYNOOTI</h5>
                                <ul className="mt-2 links-vertical size" >
                                    <li>
                                        <a
                                            className="text-muted"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            Blog
                    </a>
                                    </li>
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
                                            Presentation
                    </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-muted"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            Contact Us
                    </a>
                                    </li>
                                </ul>
                            </Col>
                            <Col md="2">
                                <h5>Information</h5>
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
                                    {/* <li>
                                        <a
                                            className="text-muted"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            Affiliates Program
                    </a>
                                    </li> */}
                                </ul>
                            </Col>
                            <Col md="2">
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
                            <Col md="3">
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
                    </div>
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

export default FooterOrange;
