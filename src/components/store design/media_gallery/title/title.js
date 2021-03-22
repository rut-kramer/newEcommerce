import React from 'react'
import './title.css'
import { connect } from 'react-redux';
function Title(props) {
    return (
        <>
            <div className="title-media-gallery  d-flex align-items-center">
                <p className="word-title-media-gallery d-flex align-items-center">{props.title}</p>
            </div>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        title: state.mediaGalleryReducer.title,
    }
}
const mapDispatchToProps = (dispatch) => ({
    
})
export default connect(mapStateToProps, mapDispatchToProps)(Title);





