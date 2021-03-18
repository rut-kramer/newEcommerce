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
            <button
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
                {/* <MenuIcon /> */}
                    <h2>=</h2> 
                </button>
                <Link to="/home">
                    <img alt="logo" src={appleIcon} style={{maxWidth: "24%"}}></img>
                </Link>
                <button onClick={()=>{     
                    // props.history.push(`/`) 
                     logOut;
                     props.setUser("");
                }}>Sing Out</button>
                <h6>{props.user&&props.user.username} </h6>
                                                                                                                   <Select 
                                                                                                                         width="160px"

                                                                                                                        className="react-select selectStor"
                                                                                                                        classNamePrefix="react-select"
                                                                                                
                                                                                                                        onChange={(e) => 
                                                                                                                            {
                                                                                                                            debugger;
                                                                                                                            funcReset(e.value)}
                                                                                                                        }
                                                                                                                        options={
                                                                                                                            
                                                                                                                                props.stores.map((sto, index) => {
                                                                                                                                    return { value: sto, label: sto.storeName }
                                                                                                                                })
                                                                                                                            //   ,  { value: "+", label:"create new..." }
                                                                                                                              
                                                                                                                            }
                                                                                                                         placeholder={props.storeCurrent.storeName}
                                                                                                                        // value={colorSelect}
                                                                                                                >
                                                                                                                </Select>
    <div onClick={()=>{
          props.history.push(`/openStore`)
    }}>
        <FontAwesomeIcon
                                                                                                                  icon={['fas','plus']}>
                                                                                                              </FontAwesomeIcon></div>
                                                                                                                
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