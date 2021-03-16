import React from 'react'
import { connect } from "react-redux";
import { actions } from "../../../../redux/action";
import {
    Row,
    Col,
    Container,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./sliderConfigurator.css"


function SliderConfigurator(props) {

    return (
        <>
            <Container fluid>

                <Row>
                    <Col sm="12"
                        className="tafritHomeConfig"
                    >

                        <Row md="12" className="mt-3"><Col md="9" className="navigation">Slider Image</Col>
                            <Col md="3"><FontAwesomeIcon icon={['fas', 'plus']}></FontAwesomeIcon>
                            </Col>
                        </Row>

                        <Row md="12" className="mt-3"><input type="file"></input></Row>

                        <Row md="12" className="mt-3">Title Setting </Row>
                        <Row md="12" className="mt-3">
                            <Col md="8">Title Name</Col>
                            <Col md="4">
                                <label className="sliderConfigSwitch">
                                    <input type="checkbox" />
                                    <span className="sliderConfigurator round"></span>
                                </label>
                            </Col>
                            <Row md="12" className="mt-3">
                                <input className="SC-input"
                                    placeholder="props.title"
                                    onChange={(e) => props.setTitle(e.target.value)}

                                ></input>

                            </Row>

                        </Row>
                        <Row md="12" className="mt-3">Title Size</Row>

                        <div className="slidecontainer">
                            <input className="slider-range" type="range" min="1" max="100" value="50" /></div>

                        <Row md="12" className="mt-3"></Row>

                        <Row md="12" className="mt-3 justify-content-between">
                            <Col md="7" className="SC-alignment">Alignment</Col>
                            <Col md="5" className="SC-alignmentIcons">
                                <FontAwesomeIcon icon={['fas', 'align-left']} className="mr-2"
                                    onClick={(e) => props.setAlignment('left')}
                                ></FontAwesomeIcon>
                                <FontAwesomeIcon icon={['fas', 'align-justify']} className="mr-2" onClick={(e) => props.setAlignment('center')}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={['fas', 'align-right']} className="mr-2" onClick={(e) => props.setAlignment('right')}></FontAwesomeIcon>
                            </Col>
                        </Row>

                        <Row md="12" className="mt-3">Title Fill</Row>
                        <Row md="12" className="mt-3">Sub Title</Row>
                        <Row md="12" className="mt-3">
                            <input className="SC-input"
                                placeholder="add"
                            ></input>
                        </Row>
                        <Row md="12" className="mt-3">Power Button</Row>
                        <Row md="12" className="mt-3"> <input className="SC-input"
                            placeholder="add"
                        ></input></Row>
                        <Row md="12" className="mt-3">Border Radius Button</Row>
                        <Row md="12"></Row>

                    </Col>
                </Row>
            </Container>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        title: state.title
    }
}
const mapDispatchToProps = (dispatch) => ({
    setTitle: (e) => dispatch(actions.setTitle(e)),
    setAlignment: (side) => dispatch(actions.setAlignment(side))

})
export default connect(mapStateToProps, mapDispatchToProps)(SliderConfigurator);

