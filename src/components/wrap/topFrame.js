import React from 'react'
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import appleIcon from '../../assets/apple-touch-icon.png'
import { actions } from '../../redux/action';
import {logOut} from "../../services/firebase";
// public/apple-touch-icon'
function TopFrame(props,{setFlagCon}) {
    
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
                    //  logOut;//
                     props.setUser("");
                }}>Sing Out</button>
                <h6>{props.user&&props.user.username} </h6>
        </div>
    </div>
    )
}

export default connect(
    (state) => {
            return {
                    user: state.userReducer.user,
            } },
    (dispatch) => {
            return {
                setUser: (a) => dispatch(actions.setUserId(a)),
            }  }
)(withRouter(TopFrame));