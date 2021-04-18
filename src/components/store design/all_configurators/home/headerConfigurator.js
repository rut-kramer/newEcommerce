import React from 'react'
import { connect } from "react-redux";
import { actions } from "../../../../redux/action";
import "./headerConfigurator.css"
import {
    Row,
    Col,
    Container,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HeaderConfigurator(props) {
    return (
        <>
            <Container fluid >
                <Row>
                    <Col sm="12"
                        className="tafritHomeConfig"
                    >
                        <Row md="12" className="mt-3">Logo</Row>
                        <Row md="12" className="mt-3"><input type="file" className="inputLogo"></input></Row>
                        <Row md="12" className="mt-3"><Col md="10" className="HC-HomeConfigurator">Navigation Title</Col>
                            <Col md="2"><FontAwesomeIcon icon={['fas', 'plus']}></FontAwesomeIcon>
                            </Col>
                        </Row>

                        <Row md="12" className="mt-3">Header Color Text</Row>
                        <Row md="12" className="mt-3">Header Background Fill</Row>
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
export default connect(mapStateToProps, mapDispatchToProps)(HeaderConfigurator);

