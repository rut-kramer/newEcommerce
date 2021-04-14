import React, { useState } from 'react'
import { connect } from "react-redux";
import { actions } from "../../../../redux/action";
import { useHistory, useLocation } from "react-router-dom";

import {
    Row,
    Col,
    Container,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./sliderConfigurator.css"
import cloud from "../../../../assets/img/xd/cloud.png"

function SliderConfigurator(props) {
    const [fileToUpload, setFileToUpload] = useState(null);

    const location = useLocation();

    function handlerLogo(event) {
        if (event) {
            let reader = new FileReader();
            console.log(props.ImagesArr)
            reader.onloadend = () => {
                props.setImagesArr(reader.result)
                console.log(props.ImagesArr)

            }
            reader.readAsDataURL(event)
            setFileToUpload(event);
        }
    }
    const history = useHistory();

    function openMediaGallery() {
        props.setfunctionToSetImage("addPictureToSliderImages")
        props.setImageLocation(location.pathname)
        history.push("/" + props.objectFields.urlRoute + "/mediaGallery/uploudImage");

    }

    return (


        <>
            <Container fluid>

                <Row>
                    <Col
                        className="tafritSliderConfig"
                    >

                        <Row md="12" className="mt-3"><Col md="9" className="p-0">Slider Image</Col>
                            <Col md="3" className="p-0 pl-4"
                                onClick={openMediaGallery}>
                                <FontAwesomeIcon icon={['fas', 'plus']}></FontAwesomeIcon>
                            </Col>
                        </Row>
                        <Row md="12" className="mt-3">
                            <Col col="4" className="p-0">
                                <div className="SC-inputFile">
                                    <img src={cloud} onClick={openMediaGallery}
                                    // onChange={(e) => handlerLogo(e.target.files[0])} 
                                    />
                                </div></Col>
                            <Col md="4" className="p-0 pl-4 pt-4">
                                <label className="sliderConfigSwitch">
                                    <input type="checkbox"
                                        onChange={props.setifDisplaySlider}
                                    />
                                    <span className="sliderConfigurator round"></span>
                                </label>
                            </Col>
                        </Row>

                        <Row md="12" className="mt-3">Title Setting </Row>
                        <Row md="12" className="mt-3">
                            <Col md="8" className="p-0">Title Name</Col>
                            <Col md="4" className="p-0 pl-4">
                                <label className="sliderConfigSwitch">
                                    <input type="checkbox"
                                        onChange={props.setIfDisplayTitle}
                                    />
                                    <span className="sliderConfigurator round"></span>
                                </label>
                            </Col>
                            <Row md="12" className="SC-titleName">
                                <input className="SC-input"
                                    value={(props.bhd.title.textContent !== undefined && props.bhd.title.textContent) ? props.bhd.title.textContent : props.objectFields.storeName}
                                    onChange={(e) => props.setTitle(e.target.value)}
                                ></input>
                            </Row>
                        </Row>
                        <Row md="12" className="mt-3">Title Size</Row>
                        {/* <div className="slidecontainer">
                            <input className="slider-range" type="range" min="1" max="100" />
                        </div> */}
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
                        <Row md="12" className="mt-1">
                            <input className="SC-input"
                                placeholder="add"
                            ></input>
                        </Row>
                        <Row md="12" className="mt-3">Power Button</Row>
                        <Row md="12" className="mt-1"> <input className="SC-input"
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
        title: state.bullPageEditReducer.title,
        objectFields: state.storeReducer.objectFields,
        ifDisplaySlider: state.BHD.ifDisplaySlider,
        bhd: state.BHD.bullcommerceHeaderDesign

    }
}
const mapDispatchToProps = (dispatch) => ({
    setTitle: (e) => dispatch(actions.setBhTitle(e)),
    setAlignment: (side) => dispatch(actions.setAlignment(side)),
    setImagesArr: (img) => dispatch(actions.setImagesArr(img)),
    setifDisplaySlider: () => dispatch(actions.setifDisplaySlider()),
    setIfDisplayTitle: () => dispatch(actions.setIfDisplayTitle()),
    setfunctionToSetImage: (location) => dispatch(actions.setfunctionToSetImage(location)),
    setImageLocation: (location) => dispatch(actions.setImageLocation(location))
})
export default connect(mapStateToProps, mapDispatchToProps)(SliderConfigurator);

