import React, { useState } from 'react'
import './uploadImages.css'
import { actions } from "../../../../redux/action"
import { connect } from 'react-redux';
import uploadImg from '../../../../assets/uploadImg.svg'
import { Link } from "react-router-dom";
// import { DragDropContext, Droppable } from 'react-beautiful-dnd';
function UploadImages(props) {
    const [myImage, setMyImage] = useState(null);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const dragOver = (e) => {
        e.preventDefault();
    }

    const dragEnter = (e) => {
        e.preventDefault();
    }

    const dragLeave = (e) => {
        e.preventDefault();
    }

    const fileDrop = (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        console.log(files);
        if (files.length) {
            handleFiles(files);
        }
    }
    const handleFiles = (files) => {
    }
    const validateFile = (file) => {
        const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/x-icon'];
        if (validTypes.indexOf(file.type) === -1) {
            return false;
        }
        return true;
    }
    function handlerLogo(event) {
        if (event) {
            let reader = new FileReader();
            reader.onloadend = () => {
                setMyImage(reader.result)
            }
            reader.readAsDataURL(event)
            // props.uploadImageNameAction({ func: props.functionSetImage, img: reader.result })

            props.uploadImage({ file: event, func: props.functionSetImage });
        }
    }

    // הפונקציה הזו בשביל תצוגת התמונות מהשרת
    // const handlerLogo = (e) => {
    //     props.uploadImage(e);
    // }
    return (
        <>
            {/* <DragDropContext>
                <Droppable> */}
                    <div className="uploud-image"
                        // onDragOver={dragOver}
                        // onDragEnter={dragEnter}
                        // onDragLeave={dragLeave}
                        // onDrop={fileDrop}
                        style={{ myImage } ? {
                            backgroundImage: `url(${myImage})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            height: '75%'
                        } : { display: "none" }}>
                        <div className="uploud-image-middle" style={myImage ? { display: "none" } : {}}>
                            <label for="files"></label>
                            <div> <img className="upload-img" src={uploadImg} /></div>
                            <div><p className="upload-image-word mt-2 mb-1">Drop Image Here</p></div>
                            <div><p className="upload-image-word pl-5 ml-3 mt-0">Or</p></div>
                            <div className="uploud-image-choose-file-div " style={{ padding: '5% 15%' }}>
                                <label htmlFor="files" className="uploud-image-choose-file" >
                                    Choose Files
                        </label>
                                <input id="files" style={{ visibility: "hidden" }} type="file" onChange={(e) => handlerLogo(e.target.files[0])} />
                            </div>

                        </div>
                    </div>
                {/* </Droppable>
            </DragDropContext> */}
            <div style={{ width: '100%' }, myImage ? {} : { display: "none" }} className="row">
                <div className="div-upload-img ">
                    <img className="m-2 ml-5" style={{ display: 'inline-block' }, { maxWidth: '2rem' }} src={uploadImg} />
                    <p className="m-2" style={{ display: 'inline-block', fontSize: '0.95em' }}>Drop Image Here</p>
                </div>
                <div className="uploud-image-choose-file-div" style={{}, myImage ? { padding: '1% 3%', marginLeft: '3%', width: '20%', height: '2.5rem' } : { display: "none" }}>
                    <label htmlFor="files" style={{ color: 'white' }} className="d-flex justify-content-center" >
                        <p>Choose Files</p>
                    </label>
                    <input id="files" style={{ visibility: "hidden" }} type="file" onChange={(e) => handlerLogo(e.target.files[0])} />
                    <Link to={props.imageLocation}>
                                <button>insert</button>
                            </Link>
</div>
            </div>
        </>
    )

}
const mapStateToProps = (state) => {
    return {
        url: state.coinsReducer.picture,
        imageLocation: state.uploadImageReducer.ImageLocation,
        functionSetImage: state.uploadImageReducer.functionSetImage
    }
}
const mapDispatchToProps = (dispatch) => ({
    uploadImage: (x) => dispatch(actions.uploadImage(x)),
    uploadImageNameAction: (e) => dispatch(actions.uploadImageNameAction(e))
})
export default connect(mapStateToProps, mapDispatchToProps)(UploadImages);