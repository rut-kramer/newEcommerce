import React from 'react'
import { NavLink} from 'react-router-dom'
import './sideBarGallery.css'
export default function SideBarGallery(props) {
    return (
        <>
            <div className="row">
                <div className="col-12 side-bar-gallery-link-div mt-3"> <NavLink activeClassName={"side-bar-gallery-link-active mt-5"} className={"side-bar-gallery-link mt-5"} to="/:storeName/admin/mediaGallery/uploudImage">Uploud Files</NavLink></div>
                <div className="col-12 side-bar-gallery-link-div"> <NavLink activeClassName="side-bar-gallery-link-active" className={"side-bar-gallery-link"} to="/:storeName/admin/mediaGallery/myFiles">My Files</NavLink></div>
                <div className="col-12 side-bar-gallery-link-div"> <NavLink activeClassName="side-bar-gallery-link-active" className={"side-bar-gallery-link"} to="/:storeName/admin/mediaGallery/gallery">Gallery</NavLink></div>
                <div className="col-12 side-bar-gallery-link-div"> <NavLink activeClassName="side-bar-gallery-link-active" className={"side-bar-gallery-link"} to="/:storeName/admin/mediaGallery/trash">Trash</NavLink></div>
            </div>
        </>
    )
}