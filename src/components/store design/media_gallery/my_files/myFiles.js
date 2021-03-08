import React from 'react'
import {
    Row,
    Col,
    Container
} from "reactstrap";

function UploadImages(props) {
    return (
        <Container>
            <Row md="12">Upload Image</Row>
            <Row md="12">
                <Col md="2">d</Col>
                <Col md="10">e</Col>
            </Row>
        </Container>
    )
}
const mapStateToProps = (state) => {
    return {
    }
}
const mapDispatchToProps = (dispatch) => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(UploadImages);




