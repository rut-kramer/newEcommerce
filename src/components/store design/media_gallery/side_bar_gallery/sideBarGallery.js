import React from 'react'
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Trash from '../gallery/gallery'
import Gallery from '../gallery/gallery'
import MyFiles from '../my_files/myFiles'
import UploadImages from '../uploud_images/uploadImages'
import './sideBarGallery.css'

export default function SideBarGallery(props) {
    return (
        <>
            <div className="side-bar-gallery">
                <Link className="side-bar-gallery-link" to="/uploudImage">Uploud Files</Link>
                <Link className="side-bar-gallery-link" to="/myFiles">My Files</Link>
                <Link className="side-bar-gallery-link" to="/gallery">Gallery</Link>
                <Link className="side-bar-gallery-link" to="/trash">Trash</Link>
            </div>
            <Router>
                <Switch>
                    <Route exact path="/uploudImage">
                        <UploadImages></UploadImages>
                    </Route>
                    <Route exact path="/myFiles">
                        <MyFiles></MyFiles>
                    </Route>
                    <Route exact path="/gallery">
                        <Gallery></Gallery>
                    </Route>
                    <Route exact path="/trash">
                        <Trash></Trash>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

