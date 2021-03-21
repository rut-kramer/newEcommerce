import React from 'react'
import { connect } from "react-redux";
import { actions } from "../../../../redux/action";
import {
    Row,
    Col,
    Container,
} from "reactstrap";
import "./productConfigurator.css"
function ProductConfigurator(props) {
    return (
        <>
            <Container>

                <Row>
                    <Col sm="12"
                        md={{ size: 10, offset: 1 }}
                        className="tafritProductConfig"
                    >
                        <Row md="12" className="mt-3">
                            <div className="lineTafritProduct mr-1"></div>
                            < div>Product Show</div></Row>
                        <Row md="12" className="mt-3">
                            <div className="lineTafritProduct mr-1"></div>
                            < div>Product Description</div></Row>
                        <Row md="12" className="mt-3">
                            <div className="lineTafritProduct mr-1"></div>
                            < div>Similar Product</div></Row>

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
export default connect(mapStateToProps, mapDispatchToProps)(ProductConfigurator);

