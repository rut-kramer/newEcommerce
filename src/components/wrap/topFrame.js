import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import appleIcon from '../../assets/apple-touch-icon.png'
import { actions } from '../../redux/action';
import { logOut } from "../../services/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCookies } from "react-cookie";
import { CopyToClipboard } from 'react-copy-to-clipboard';

// public/apple-touch-icon'
function TopFrame(props) {

    const [copyUrl, setCopyUrl] = useState({
        value: "https://" + props.storeCurrent.urlRoute + ".bullcommerce.shop",
        copied: false,
    })
    function funcReset(item) {
        props.setCurrentStore(item);
        props.getOrdersByStore(item._id)
        props.getCategoriesByStore(item._id)
        props.getAllPaper(item._id)
        props.getAllAttributes(item._id);
        props.getBhdByStoreId(item._id)

        props.history.push(`/` + item.urlRoute)
        setCopyUrl({ value: "https://" + item.urlRoute + ".bullcommerce.shop", copied: false })
    }


    useEffect(() => {
        props.getStoreByUser(props.user._id);
    }, [])

    return (
        <div
            position="fixed"
            className="MuiAppBar-root MuiPaper-elevation4"
            style={{ backgroundColor: '#fff', color: 'black' }}>


            <div className="row">
                <button onClick={() => { props.replaceAdmin(); props.setFlagCon() }}>Replace Admin</button>

                {props.isAdmin &&
                    <>

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

                        <div id="linkToAdmin" style={{ display: "inline-flex" }} >

                            <CopyToClipboard text={copyUrl.value} onCopy={() => {
                                setCopyUrl({ copied: true })
                                setTimeout(() => {
                                    setCopyUrl({ copied: false })
                                }, 500);
                            }}>
                                <FontAwesomeIcon style={{ fontSize: "28px", height: "2em", marginRight: "8px" }} icon={['far', 'copy']} ></FontAwesomeIcon>
                            </CopyToClipboard>

                            <select onChange={(e) => {
                                funcReset(JSON.parse(e.target.value))
                            }}
                                className="field__select" >
                                {props.stores.map((item, index) => (

                                    <option value={JSON.stringify(item)} selected={item._id == props.storeCurrent._id ? "selected" : ""}>
                                        {item._id == props.storeCurrent._id ? "https://" + props.storeCurrent.urlRoute + ".bullcommerce.shop" : item.storeName}</option>

                                    // <option value={JSON.stringify(item)} >{item.storeName}</option>
                                ))}
                                {/* <option>בחר חנות</option> */}
                            </select>


                            <Link
                                //   className=" d-flex justify-content-center align-items-center"
                                target="_blank"

                                // to={`${window.location.pathname.replace("/admin", "")}`}>
                                to={"http://localhost:3000/" + props.storeCurrent.urlRoute}><FontAwesomeIcon style={{ fontSize: "28px", height: "2em", marginRight: "8px" }} icon={['fas', 'eye']} >   </FontAwesomeIcon>
                                {/* {
                                    localStorage.setItem('viewMagazine', JSON.stringify(ObjMagazine))}
                                {
                                    localStorage.setItem('ViewState', true)}
                                {
                                    localStorage.setItem('listCategoriesMenu', JSON.stringify(listCategoriesMenu))}
                               */}
                                {/* <p>{"yy"}</p> */}
                            </Link>

                        </div>
                        <label>admin</label>
                    </>
                }
                {copyUrl.copied ? <span style={{ color: 'red', border: '1px solid red', borderRadius: '25%' }}>Copied.</span> : null}


                {copyUrl.copied ? <span style={{ color: 'red', border: '1px solid red', borderRadius: '25%' }}>Copied.</span> : null}
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
            isAdmin: state.viewOrEditReducer.isAdmin
        }
    },
    (dispatch) => {
        return {
            // setUser: (a) => dispatch(actions.setUserId(a)),
            userLogout: (j) => dispatch(actions.userLogout(j)),
            getStoreByUser: (id) => { dispatch(actions.getStoreByUser(id)) },
            getCategoriesByStore: (i) => { dispatch(actions.getCategoriesByStore(i)) },
            getOrdersByStore: (i) => { dispatch(actions.getOrdersByStore(i)) },
            getAllPaper: (i) => { dispatch(actions.getAllPaper(i)) },
            getAllAttributes: (i) => { dispatch(actions.getAllAttributes(i)) },
            setCurrentStore: (i) => { dispatch(actions.setSaveAllStoreDetails(i)) },
            setCart: (e) => { dispatch(actions.setOrder(e)) },
            replaceAdmin: () => { dispatch(actions.replaceAdmin()) },
            getBhdByStoreId: (e) => dispatch(actions.getBhdByStoreId(e))

        }
    }
)(withRouter(TopFrame));
