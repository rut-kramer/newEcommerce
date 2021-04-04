import React, { useEffect } from 'react'
import { actions } from "../../../redux/action"
import { connect } from 'react-redux';
import { Route, Switch, useLocation } from 'react-router-dom'
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
import Gallery from './gallery/gallery'
import './mediaGallery.css'
let loc = "";
function MediaGallery(props) {
    let location = useLocation();

    useEffect(() => {
        loc = location.pathname
        console.log(loc)
    }, []);
    return (
        <Container className="container-media-gallery p-0">
            <Row md="12" className="title-media-gallery m-0"><Title></Title></Row>
            <Row md="12" className="m-0">
                <Col md="2" className="side-bar-gallery">
                    <SideBarGallery></SideBarGallery>
                </Col>
                <Col md="10">
                    <Switch>
                     
                        <Route path={loc + "/mediaGallery/uploudImage"}>
                            <UploadImages></UploadImages>
                        </Route>
                        <Route path={loc + "/mediaGallery/myFiles"}>
                            <MyFiles></MyFiles>
                        </Route>
                        <Route path={loc + "/mediaGallery/gallery"}>
                            <Gallery></Gallery>
                        </Route>
                        <Route path={loc + "/mediaGallery/trash"}>
                            <Trash></Trash>
                        </Route>
                        <Route exact path={loc }>
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




