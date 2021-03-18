import React from 'react'
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import appleIcon from '../../assets/apple-touch-icon.png'
import { actions } from '../../redux/action';
import { logOut } from "../../services/firebase";
// public/apple-touch-icon'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TopFrame(props, { setFlagCon }) {

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
                    onClick={setFlagCon}
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
                <div style={{ marginLeft: "67%",fontSize: "24px"}}>
                {props.user && props.user.username} &nbsp;
                <Link to="/" style={{ fontSize: "34px", color:'black'}}
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
                    user: state.userReducer.user,
            } },
    (dispatch) => {
            return {
                setUser: (a) => dispatch(actions.setUserId(a)),
            }  }
)(withRouter(TopFrame));
