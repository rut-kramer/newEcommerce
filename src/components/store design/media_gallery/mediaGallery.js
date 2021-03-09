import React from 'react'
import { actions } from "../../../redux/action"
import { connect } from 'react-redux';
import {
    Row,
    Col,
    Container
} from "reactstrap";
import SideBarGallery from './side_bar_gallery/sideBarGallery';
import Title from './title/title';

function MediaGallery(props) {
    return (
        <Container>
            <Row md="12" className="title-media-gallery"><Title></Title></Row>
            <Row md="12" className>
                <Col md="2" className="side-bar-gallery"><SideBarGallery></SideBarGallery></Col>
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
export default connect(mapStateToProps, mapDispatchToProps)(MediaGallery);




