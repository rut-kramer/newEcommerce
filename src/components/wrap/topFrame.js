import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Select from "react-select"
import appleIcon from '../../assets/apple-touch-icon.png'
import { actions } from '../../redux/action';
import { logOut } from "../../services/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCookies } from "react-cookie";
import { combineReducers } from 'redux';

// public/apple-touch-icon'
function TopFrame(props, { setFlagCon }) {
    const [cookies, setCookie] = useCookies(["order"]);
    let flag = 1;
    function funcReset(item) {

        props.setCurrentStore(item);
        props.getOrdersByStore(item._id)
        props.getCategoriesByStore(item._id)
        props.getAllPaper(item._id)
        props.getAllAttributes(item._id)
        let str = props.storeCurrent;
        let t = cookies[str];
        if ((flag === 1) && (t)) {
            props.setCart(t)
            flag = 2
        }
        props.history.push(`/` + props.objectFields)
    }
useEffect(()=>{
      props.getStoreByUser(props.user._id);   
})


    window.addEventListener("beforeunload", (ev) => {
        ev.preventDefault();
        // let listOrder=cookies.listOrder
        // let cart= listFromCookies.find(c=>c.store==props.cart.store)
        // if(cart)
        // {

        // }
        // else
        // {
        //         listOrder.push(props.cart)
        //         setCookie("listOrder",listOrder, {
        //                  path: "/"
        //         });     
        // }
        setCookie(props.storeCurrent._id, props.cart, {
            path: "/"
        });

    });
    function save() {

        // console.log(          JSON.stringify({
        //     "store": "data._id",
        //     "categoryName": "Default66Category1",
        //     "color": "red", "masterCategory": null
        //  }) )
        setCookie(props.storeCurrent._id, props.cart, {
            path: "/"
        });
    }
    function get() {
        let str = props.storeCurrent._id;
        let t = cookies[str];
        props.setCart(t)
    }


    //       useEffect(()=>{
    // props.stores
    // {storeName}

    // //       })
    // pp()
    // {
    //     alert("jj")
    // }
    return (
        <div
            position="fixed"
            className="MuiAppBar-root MuiPaper-elevation4"
            style={{ backgroundColor: '#fff', color: 'black' }}>


            <div className="row">
                {/* <button
                color="inherit"
                aria-label="open drawer"
                onClick={setFlagCon}
                //edge="end"
                style={{ 
                    width: "64px",
                    height: "50px",
                    opacity: 1,
                    backgroundColor: "#ffffff",
                    border: "none",
                    padding: "5px",
                    marginLeft: "10px"}}>
                    <h2>=</h2> 
                </button> */}


                <button
                    // color="inherit"
                    aria-label="open drawer"
                    onClick={props.setFlagCon}
                    //edge="end"
                    style={{
                        width: "64px",
                        height: "50px",
                        opacity: 1,
                        backgroundColor: "#ffffff",
                        border: "none",
                        padding: "5px",
                        marginLeft: "1%"
                    }}>
                    <FontAwesomeIcon style={{ fontSize: "25px" }} icon={['fas', 'bars']}></FontAwesomeIcon>
                </button>

                <Link to="/home">
                    <img alt="logo" src={appleIcon} style={{ maxWidth: "28%", paddingLeft: "2%" }}></img>
                </Link>
                <div>

                    <select onChange={(e) => {
                        funcReset(JSON.parse(e.target.value))
                    }}
                        className="field__select" >
                            <option>בחר חנות</option>
                        {props.stores.map((item, index) => (
                            <option value={JSON.stringify(item)} >{item.storeName}</option>
                        ))}
                    </select>

                    <label>{props.objectFields.urlRoute}</label>
                    <button onClick={save}>save</button>
                    <button onClick={get}>get</button>
                </div>
                {/* <button onClick={() => {
                    // props.history.push(`/`) 
                    //  logOut;//
                   
                }}>Sing Out</button> */}
                <div className="ml-auto" style={{ marginRight: "3vw", fontSize: "24px" }}>
                    {props.user && props.user.username} &nbsp;
                <Link to="/" style={{ fontSize: "34px", color: 'black' }}
                        className="tooltip-TF-LO"
                        onClick={
                            () => {
                                props.userLogout("USER_LOGOUT");
                                logOut()
                            }
                        }
                    >
                        <FontAwesomeIcon icon={['fas', 'user-circle']}></FontAwesomeIcon>
                        <span className="tooltiptext">Sing Out</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default connect(
    (state) => {
        return {
            objectFields: state.storeReducer.objectFields,
            user: state.userReducer.user,
            stores: state.userReducer.storesOfUser,
            storeCurrent: state.storeReducer.objectFields,
            cart: state.cartReducer.cart,

        }
    },
    (dispatch) => {
        return {
            setUser: (a) => dispatch(actions.setUserId(a)),
            userLogout: (j) => dispatch(actions.userLogout(j)),
            getStoreByUser: (id) => { dispatch(actions.getStoreByUser(id)) },
            getCategoriesByStore: (i) => { dispatch(actions.getCategoriesByStore(i)) },
            getOrdersByStore: (i) => { dispatch(actions.getOrdersByStore(i)) },
            getAllPaper: (i) => { dispatch(actions.getAllPaper(i)) },
            getAllAttributes: (i) => { dispatch(actions.getAllAttributes(i)) },
            setCurrentStore: (i) => { dispatch(actions.setSaveAllStoreDetails(i)) },
            setCart: (e) => { dispatch(actions.setOrder(e)) },

        }
    }
)(withRouter(TopFrame));
