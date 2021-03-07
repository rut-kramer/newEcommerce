import React from 'react'
// import { connect } from "react-redux";
// import { actions } from "../../redux/action";
import { Col, Form, FormGroup, Label, Input, Row, Button } from 'reactstrap';
import './checkOut.css'
//בתוכ הסוגריים של הפונקציה מקבלים את הפרופס
export default function CheckOut(props) {

    return (
        <>
            <p className="check-out-tytle">My shopping</p>
            <Form>
                <Row form >
                    {/* <Row form style={{ top: "471px" }}> */}
                    <Col className="check-out-left check-out-Col">
                        <FormGroup>
                            <Label for="firstName" className="check-out-label">First Name</Label>
                            <Input type="text" name="firstName" id="firstName" className="check-out-Input" />
                        </FormGroup>
                    </Col>
                    <Col className="check-out-right check-out-Col">
                        <FormGroup>
                            <Label for="lastName" className="check-out-label">Last Name</Label>
                            <Input type="text" name="lastName" id="lastName" className="check-out-Input" />
                        </FormGroup>
                    </Col>
                </Row>
                {/* <FormGroup className="check-out-left" style={{ top: "581px", width: "700px" }}> */}
                <FormGroup className="check-out-left" >
                    <Label for="email" className="check-out-label">Email</Label>
                    <Input type="email" name="email" id="email" className="check-out-Input" />
                </FormGroup>
                {/* <Row form style={{ top: "695px" }}> */}
                <Row form >
                    <Col md={6} className="check-out-left check-out-Col">
                        <FormGroup>
                            <Label for="phoneNumber" className="check-out-label">Phone Number</Label>
                            <Input type="text" name="phoneNumber" id="phoneNumber" className="check-out-Input" />
                        </FormGroup>
                    </Col>
                    <Col md={6} className="check-out-right check-out-Col">
                        <FormGroup>
                            <Label for="homePhoneNumber" className="check-out-label">Home Phone Number</Label>
                            <Input type="text" name="homePhoneNumber" id="homePhoneNumber" className="check-out-Input" />
                        </FormGroup>
                    </Col>
                </Row>
                {/* <Row form style={{ top: "805px" }}> */}
                <Row form >
                    <Col md={6} className="check-out-left check-out-Col">
                        <FormGroup>
                            <Label for="country" className="check-out-label">Country</Label>
                            <Input type="select" name="country" id="country" className="check-out-Input">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col md={6} className="check-out-right check-out-Col">
                        <FormGroup>
                            <Label for="state" className="check-out-label">State</Label>
                            <Input type="select" name="state" id="state" className="check-out-Input">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>
                {/* <Row form style={{ top: "917px" }}> */}
                <Row form>
                    <Col md={6} className="check-out-left check-out-Col">
                        <FormGroup>
                            <Label for="address" className="check-out-Label">Address</Label>
                            <Input type="text" name="address" id="address" className="check-out-Input" />
                        </FormGroup>
                    </Col>
                    <Col md={6} className="check-out-right check-out-Col">
                        <FormGroup>
                            <Label for="zipcode" className="check-out-label">Zipcode</Label>
                            <Input type="password" name="zipcode" id="zipcode" className="check-out-Input" />
                        </FormGroup>
                    </Col>
                </Row>
                <Button className="check-out-Button"><p className="check-out-next">Next</p></Button>
            </Form>
        </>
    )
}
// const mapStateToProps = (state) => {
//     return {

//     }
// }
// const mapDispatchToProps = (dispatch) => ({

// })
// export default connect(mapStateToProps, mapDispatchToProps)(CheckOut);
