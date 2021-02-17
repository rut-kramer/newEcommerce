import React from 'react'
import { connect } from "react-redux";
import {
    Container, Row,
    Col, CardBody,
    CardFooter,
    CardTitle, Button,
    Card,
    UncontrolledTooltip,
} from "reactstrap";

import { actions } from "../../redux/action";
import ia006 from "../../assets/img/xd/ia_300000006.png";

import eyeRegular from "../../assets/img/xd/eye-regular.svg";

import cart from "../../assets/img/xd/cart.svg"

//בתוכ הסוגריים של הפונקציה מקבלים את הפרופס
function categoryBullcomerce(props) {
    return (
        <>
            <h1>heloo</h1>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2 a">
                        <img
                            alt="..."
                            src={ia006}
                        ></img>
                    </div>
                    <div className="col-2 a">
                        <img
                            alt="..."
                            src={ia006}
                        ></img>
                    </div>
                    <div className="col-2 a">
                        <img
                            alt="..."
                            src={ia006}
                        ></img>
                    </div>
                    <div className="col-2 a">
                        <img
                            alt="..."
                            src={ia006}
                        ></img>
                    </div>

                </div>
                <div className="row mt-5">
                    <div className="col-2 a">
                        <img
                            alt="..."
                            src={ia006}
                        ></img>
                    </div>
                    <div className="col-2 a">
                        <img
                            alt="..."
                            src={ia006}
                        ></img>
                    </div>
                    <div className="col-2 a">
                        <img
                            alt="..."
                            src={ia006}
                        ></img>
                    </div>
                    <div className="col-2 a">
                        <img
                            alt="..."
                            src={ia006}
                        ></img>
                    </div>

                </div>
            </div>
            {/* ////////////////////////////////// */}
            {/* <div className="main">
                <div className="section">
                    <Container fluid>

                        <Row>
                            <Col md="12">

                            <Col md="2">fff</Col>
                            <Col md="2">aaa</Col>

                            <Col md="6">
                                <Col lg="2" md="1" >
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
                                                <CardTitle className="mt-2" tag="h4">Patio Arm Chair</CardTitle>
                                            </a>

                                            <CardFooter>
                                                <div className="price-container">
                                                    <span className="price">150 $</span>
                                                </div>
                                            </CardFooter>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col lg="2" md="1" >
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
                                                <CardTitle className="mt-2" tag="h4">Patio Arm Chair</CardTitle>
                                            </a>

                                            <CardFooter>
                                                <div className="price-container">
                                                    <span className="price">150 $</span>
                                                </div>
                                            </CardFooter>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col lg="2" md="1" >
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
                                                <CardTitle className="mt-2" tag="h4">Patio Arm Chair</CardTitle>
                                            </a>

                                            <CardFooter>
                                                <div className="price-container">
                                                    <span className="price">150 $</span>
                                                </div>
                                            </CardFooter>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Col>
                            <Col md="2">aa</Col>
                        </Row>
                    </Container>
                </div>
            </div > */}
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        //אפשר לקרוא שם אחר לאוביקט
    }
}
const mapDispatchToProps = (dispatch) => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(categoryBullcomerce);


/////////////////////////////


