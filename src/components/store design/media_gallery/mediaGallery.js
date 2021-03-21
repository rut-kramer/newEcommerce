import React from 'react'
import { actions } from "../../../redux/action"
import { connect } from 'react-redux';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import {
    Row,
    Col,
    Container
} from "reactstrap";
import SideBarGallery from './side_bar_gallery/sideBarGallery';
import Title from './title/title';
import Trash from './trash/trash'
import MyFiles from './my_files/myFiles'
import UploadImages from './uploud_images/uploadImages'
import './mediaGallery.css'
function MediaGallery(props) {
    return (
        <Container className="container-media-gallery p-0">
            <Row md="12" className="title-media-gallery m-0"><Title></Title></Row>
            <Row md="12" className="m-0">
                <Col md="2" className="side-bar-gallery">
                    <SideBarGallery></SideBarGallery>
                </Col>
                <Col md="10">
                    <Switch>
                        <Route exact path="/:storeName/admin/mediaGallery/uploudImage">
                            <UploadImages></UploadImages>
                        </Route>
                        <Route path="/:storeName/admin/mediaGallery/myFiles">
                            <MyFiles></MyFiles>
                        </Route>
                        {/* <Route exact path="/gallery">
                                <Gallery></Gallery>
                            </Route> */}
                        <Route exact path="/:storeName/admin/mediaGallery/trash">
                            <Trash></Trash>
                        </Route>
                        <Route exact path="/:storeName/admin/mediaGallery/">
                            <UploadImages></UploadImages>
                        </Route>
                        <Route exact path="/:storeName/admin/">
                            <UploadImages></UploadImages>
                        </Route>
                    </Switch>
                </Col>
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




