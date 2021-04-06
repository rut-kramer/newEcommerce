import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { actions } from "../../../../redux/action"
import { connect } from 'react-redux'
import './sideBarGallery.css'
// let loc = "";
function SideBarGallery(props) {
    let location = useLocation();
    const [loc, setLoc] = useState("");
    useEffect(() => {
        setLoc(location.pathname)
        // loc = location.pathname
        console.log(loc)
    }, []);
    return (
        <>
            <div className="row">
                <div className="col-12 side-bar-gallery-link-div mt-3">
                    <NavLink
                        activeClassName={"side-bar-gallery-link-active mt-5"}
                        className={"side-bar-gallery-link mt-5"}
                        to={loc + "/uploudImage"}
                        onClick={() => props.setTitleBySideBar('Uploud Images')}
                        // location={{
                        //     search: '?id=2',
                        // }}
                        // isActive={(match, location) => {
                        //     if (!match) {
                        //         return false;
                        //     }
                        //     const searchParams = newURLSearchParams(location.search);
                        //     return match.isExact && searchParams.has('id');
                        // }}
                        isActive={() => (loc + "/uploudImage") === location.pathname||(loc ) === location.pathname}
                        // isActive={() => location.pathname.includes('/uploudImage')}
                    >
                        Uploud Images
                    </NavLink>
                </div>
                <div className="col-12 side-bar-gallery-link-div"> <NavLink activeClassName="side-bar-gallery-link-active" className={"side-bar-gallery-link"} to={loc + "/myFiles"} onClick={() => props.setTitleBySideBar('My Files')}>My Files</NavLink ></div>
                <div className="col-12 side-bar-gallery-link-div"> <NavLink activeClassName="side-bar-gallery-link-active" className={"side-bar-gallery-link"} to={loc + "/gallery"} onClick={() => props.setTitleBySideBar('Gallery')}>Gallery</NavLink></div>
                <div className="col-12 side-bar-gallery-link-div"> <NavLink activeClassName="side-bar-gallery-link-active" className={"side-bar-gallery-link"} to={loc + "/trash"} onClick={() => props.setTitleBySideBar('Trash')}>Trash</NavLink></div>
            </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(SideBarGallery);




