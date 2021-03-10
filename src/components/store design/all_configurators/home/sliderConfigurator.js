import React from 'react'
import { connect } from "react-redux";
import { actions } from "../../../../redux/action";
import {
    Row,
    Col,
    Container,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// 


// align - left
// 
// 
function SliderConfigurator(props) {
    return (
        <>
            <Container>

                <Row>
                    <Col sm="12"
                        md={{ size: 10, offset: 1 }}
                        className="tafritHomeConfig"
                    >

                        <Row md="12" className="mt-3"><Col md="10" className="navigation">Slider Image</Col>
                            <Col md="2"><FontAwesomeIcon icon={['fas', 'plus']}></FontAwesomeIcon>
                            </Col>
                        </Row>

                        <Row md="12" className="mt-3"><input type="file"></input></Row>

                        <Row md="12" className="mt-3">Title Setting </Row>

                        <Row md="12" className="mt-3">Title Name</Row>
                        <Row md="12" className="mt-3"><input value="Title 01"></input></Row>
                        <Row md="12" className="mt-3">Title Size</Row>
                        <Row md="12" className="mt-3"></Row>

                        <Row md="12" className="mt-3 justify-content-between">
                            <Col className="navigation">Alignment</Col>
                            <Col>
                                <FontAwesomeIcon icon={['fas', 'align-left']} className="mr-2"></FontAwesomeIcon>
                                <FontAwesomeIcon icon={['fas', 'align-justify']} className="mr-2"></FontAwesomeIcon>
                                <FontAwesomeIcon icon={['fas', 'align-right']} className="mr-2"></FontAwesomeIcon>

                            </Col>
                        </Row>


                        <Row md="12" className="mt-3">Title Fill</Row>
                        <Row md="12" className="mt-3">Sub Title</Row>
                        <Row md="12" className="mt-3"><input value="Title 01"></input></Row>
                        <Row md="12" className="mt-3">Power Button</Row>
                        <Row md="12" className="mt-3"><input value="Add Title"></input></Row>
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
    }
}
const mapDispatchToProps = (dispatch) => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(SliderConfigurator);

