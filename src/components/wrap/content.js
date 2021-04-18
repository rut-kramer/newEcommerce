import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import './wrap-component.css'
import AdminCurd from '../store setting/admin'
import Dnd from '../navbars/DndCategories'
import Cart from '../store design/cart_page/cart';
import { useCookies } from "react-cookie";
import { connect } from 'react-redux';
import MainStoreRoutes from "../store design/store_page/mainStore"
import TopFooter from "../topFooter"
import MediaGallery from '../store design/media_gallery/mediaGallery';

function Content(props) {
    //    //   cookies = "str="+props.cart
    //      const [cookies, setCookie,removeCookies] = useCookies(["order"]);
    //      const [coo, setCoo] = useCookies(["ordejjr"]);
    //         function  save() {
    //             // const [coo, setCoo] = useCookies(["ordejjr"]);
    //                 setCookie(props.storeCurrent,props.cart, {
    //                         path: "/"
    //                       }); 
    //                       setCookie("123","456", {
    //                         path: "/"
    //                       }); 

    //                       setCoo("aaaa","bbbbb", {
    //                         path: "/"
    //                       }); 

    //         }
    //         function  get() {  
    //             let x=cookies;
    //             let y=coo;
    //             let  str=props.storeCurrent;
    //             let t = cookies[str];
    //         }

    //         function remove() {
    //             removeCookies("order")
    //         }

    return (
        <div className="Content">
            {/* <button onClick={save}>save</button>
            <button onClick={get}>get</button>
            <button onClick={remove}>remove</button> */}
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
        storeCurrent: state.storeReducer.objectFields._id,
        cart: state.cartReducer.cart
    }
}
const mapDispatchToProps = (dispatch) => ({

})
export default connect(mapStateToProps, mapDispatchToProps)
    (Content);
