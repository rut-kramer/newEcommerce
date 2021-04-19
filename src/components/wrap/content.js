import React, { useEffect } from 'react';
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
import { actions } from '../../redux/action';
// import { connect } from 'react-redux';
function Content(props) {

     const [cookies, setCookie,removeCookies] = useCookies(["order"]);
       
        useEffect(()=>{
            get();

        },[])

        function  get()
         {  
            let t = cookies.order;
            if(t!=undefined)
           props.setCart(t)
            else          
          props.setCart( {  products: [],totalPrice: 0})
 }
        window.addEventListener("beforeunload", (ev) => {
            ev.preventDefault();
            setCookie("order", props.cart, {
                    path: "/"
            });
    });



    return (
        <div className="Content">
            {/* <button onClick={save}>save</button>  */}
          {/* <button onClick={get}>get</button> */}
            {/* <button onClick={remove}>remove</button> */}
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
{/* <TopFooter></TopFooter> */}
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
    setCart: (e) => { dispatch(actions.setOrder(e)) },

})
export default connect(mapStateToProps, mapDispatchToProps)
    (Content);
