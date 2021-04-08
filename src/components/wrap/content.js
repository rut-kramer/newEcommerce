import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import './wrap-component.css'
import AdminCurd from '../store setting/admin'
import Dnd from '../navbars/DndCategories'
import { connect } from 'react-redux';
import MainStoreRoutes from "../store design/store_page/mainStore"
import TopFooter from "../topFooter"
import MediaGallery from '../store design/media_gallery/mediaGallery';

function Content(props) {


    return (
        <div className="Content">
            <Switch>
                <Route path="/dnd" component={Dnd} />

                {/* <Route path="/filter-category" component={CategoryByFilter} />
                <Route path="/:storeName/admin" component={AdminCurd} />
                <Route path="/:storeName/cart" component={Cart} />
                <Route path="/:storeName/product" component={Product} />
                <Route path="/:storeName" component={Temporary} /> */}

                {/* <Switch> */}
                <Route path="/:storeName/mediaGallery" component={MediaGallery}></Route>
                <Route path="/:storeName/admin" component={AdminCurd} />
                <MainStoreRoutes></MainStoreRoutes>
            </Switch>
<TopFooter></TopFooter>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
    }
}
const mapDispatchToProps = (dispatch) => ({
})
export default connect(mapStateToProps, mapDispatchToProps)
    (Content);
