import React, { useState } from 'react'
import { connect } from 'react-redux';
import { actions } from "../../../../redux/action"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link} from 'react-router-dom'
import Hidden from '../hidden_window/hidden'
import {
    Row,
    Col,
    Container
} from "reactstrap";
import imgImg from '../../../../assets/media-gallery/interior-with-white-sofa.png'
import './myFiles.css'
// import { borderRadius } from 'react-select/src/theme';
function MyFiles(props) {
    const [showWindow, setShowWindow] = useState(false)
    function hideOrShow() {
        setShowWindow(!showWindow)
    }
    return (
        <>
            <Container className="">
                <Row md="12">
                    <Col md="9" className="">
                        <div className="my-file" style={{ display: "flex" }}>
                            <Link to={"/" + props.objectFields.urlRoute + "/admin/mediaGallery/uploudImage"} onClick={() => props.setTitleBySideBar('Uploud Images')}>
                                <div className="upload-my-file" style={{ display: "inline-block" }}>
                                    <FontAwesomeIcon className="icon-upload-my-file"
                                        icon={['fas', 'plus']}>
                                    </FontAwesomeIcon>
                                    <div><p className="word-icon-upload-my-file">Upload</p></div>
                                </div>
                            </Link>

                            <div  className="upload-my-file-div" style={{ display: "inline-block"}} onClick={hideOrShow}>
                                <img className="img-img" src={imgImg} style={{borderBottom: showWindow ? '3px #FE5196 solid' : null }}/>
                                <div className="overlay" style={{backgroundColor: showWindow ? 'rgba(0, 0, 0, 0.281)' : null }}/>
                            </div>
                        </div>
                    </Col>
                    <Col md="3">
                        {showWindow ? <Hidden imgA={imgImg} name="interior-with-white-sofa.png"></Hidden> : null}
                    </Col>
                </Row>
            </Container>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        objectFields: state.storeReducer.objectFields
    }
}
const mapDispatchToProps = (dispatch) => ({
    setTitleBySideBar: (e) => dispatch(actions.setTitleBySideBar(e))
})
export default connect(mapStateToProps, mapDispatchToProps)(MyFiles);




