import React, { useState } from 'react'
import './uploadImages.css'
import { actions } from "../../../../redux/action"
import { connect } from 'react-redux';
import uploadImg from '../../../../assets/uploadImg.svg'

function UploadImages(props) {
    const [fileToUpload, setFileToUpload] = useState(null);

    function handlerLogo(event) {
        if (event) {
            let reader = new FileReader();
            reader.onloadend = () => {
                props.setImagesArr(reader.result)
            }
            reader.readAsDataURL(event)
            setFileToUpload(event);
        }
    }
    // הפונקציה הזו בשביל תצוגת התמונות מהשרת
    // const handlerLogo = (e) => {
    //     props.uploadImage(e);
    // }
    return (
        <>
            <div className="uploud-image">
                <div className="uploud-image-middle">
                    <label for="files">

                    </label>
                    <div> <img className="upload-img" src={uploadImg} alt="uploadImg" /></div>
                    <div><p className="upload-image-word mt-2 mb-1">Drop Image Here</p></div>
                    <div><p className="upload-image-word pl-5 ml-3 mt-0">Or</p></div>
                    <div className="uploud-image-choose-file-div ml-2">
                        <label htmlFor="files" className="uploud-image-choose-file" >
                            Choose Files
                            <img className="logoC"
                                src={props.url}
                            ></img>
                        </label>
                        <input id="files" style={{ visibility: "hidden" }} type="file" onChange={(e) => handlerLogo(e.target.files[0])} />
                    </div>
                </div>
            </div>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        url: state.coinsReducer.picture,
    }
}
const mapDispatchToProps = (dispatch) => ({
    uploadImage: (x) => dispatch(actions.uploadImage(x)),
    setImagesArr: (img) => dispatch(actions.setImagesArr(img))
})
export default connect(mapStateToProps, mapDispatchToProps)(UploadImages);




