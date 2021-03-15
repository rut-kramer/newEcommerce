import React from 'react'
import './uploadImages.css'
import { actions } from "../../../../redux/action"
import { connect } from 'react-redux';
import {
    Row,
    Col,
    Container
} from "reactstrap";
import uploadImg from '../../../../assets/uploadImg.svg'

function UploadImages(props) {
    return (
        <>
            <div className="uploud-image">
                <div className="uploud-image-middle">
                    <div> <img className="upload-img" src={uploadImg} alt="uploadImg" /></div>
                    <div><p className="upload-image-word mt-2 mb-1">Drop Image Here</p></div>
                    <div><p className="upload-image-word pl-5 ml-3 mt-0">Or</p></div>
                    <div className="uploud-image-choose-file-div ml-2">
                        <label for="files" className="uploud-image-choose-file">Choose Files</label>
                        <input id="files" style={{ visibility: "hidden" }} type="file" />
                    </div>
                </div>
            </div>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
    }
}
const mapDispatchToProps = (dispatch) => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(UploadImages);




