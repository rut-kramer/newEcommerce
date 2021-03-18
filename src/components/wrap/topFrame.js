import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Select from "react-select"
import appleIcon from '../../assets/apple-touch-icon.png'
import { actions } from '../../redux/action';
import {logOut} from "../../services/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// public/apple-touch-icon'
function TopFrame(props,{setFlagCon}) {
    
    function funcReset(item) {
        props.setCurrentStore(item);
        props.getOrdersByStore(item._id)
        props.getCategoriesByStore(item._id)
        props.getAllPaper(item._id)
        props.getAllAttributes(item._id)
        props.history.push(`/`+props.objectFields)
      }

//       useEffect(()=>{
// props.stores
// {storeName}
        
//       })

    return(
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

                {/* <button onClick={() => {
                    // props.history.push(`/`) 
                    //  logOut;//
                    props.setUser("");
                }}>Sing Out</button> */}
                <div style={{ marginLeft: "67%", fontSize: "24px" }}>
                    {props.user && props.user.username} &nbsp;
                <Link to="/" style={{ fontSize: "34px", color: 'black' }}
                        className="tooltip-TF-LO"
                        onClick={() => {
                            props.setUser("");
                        }}>
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
                    storeCurrent:state.storeReducer.objectFields,
            } },
    (dispatch) => {
            return {
                setUser: (a) => dispatch(actions.setUserId(a)),
                getCategoriesByStore: (i) => {debugger; dispatch(actions.getCategoriesByStore(i)) },
                getOrdersByStore: (i) => { dispatch(actions.getOrdersByStore(i)) },
                getAllPaper: (i) => { dispatch(actions.getAllPaper(i)) },
                getAllAttributes: (i) => { dispatch(actions.getAllAttributes(i)) },
      setCurrentStore: (i) => { dispatch(actions.setSaveAllStoreDetails(i)) },

            }  }
)(withRouter(TopFrame));
