import React from 'react'
import { NavLink} from 'react-router-dom'
import { actions } from "../../../../redux/action"
import { connect } from 'react-redux';
import './sideBarGallery.css'
function SideBarGallery(props) {
    return (
        <>
            <div className="row">
                <div className="col-12 side-bar-gallery-link-div mt-3"> <NavLink activeClassName={"side-bar-gallery-link-active mt-5"} className={"side-bar-gallery-link mt-5"} to="/:storeName/admin/mediaGallery/uploudImage" onClick={() => props.setTitleBySideBar('Uploud Images')}>Uploud Images</NavLink></div>
                <div className="col-12 side-bar-gallery-link-div"> <NavLink activeClassName="side-bar-gallery-link-active" className={"side-bar-gallery-link"} to="/:storeName/admin/mediaGallery/myFiles" onClick={() => props.setTitleBySideBar('My Files')}>My Files</NavLink ></div>
                <div className="col-12 side-bar-gallery-link-div"> <NavLink activeClassName="side-bar-gallery-link-active" className={"side-bar-gallery-link"} to="/:storeName/admin/mediaGallery/gallery" onClick={() => props.setTitleBySideBar('Gallery')}>Gallery</NavLink></div>
                <div className="col-12 side-bar-gallery-link-div"> <NavLink activeClassName="side-bar-gallery-link-active" className={"side-bar-gallery-link"} to="/:storeName/admin/mediaGallery/trash" onClick={() => props.setTitleBySideBar('Trash')}>Trash</NavLink></div>
            </div>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
    }
}
const mapDispatchToProps = (dispatch) => ({
    setTitleBySideBar: (e) => dispatch(actions.setTitleBySideBar(e))
})
export default connect(mapStateToProps, mapDispatchToProps)(SideBarGallery);




