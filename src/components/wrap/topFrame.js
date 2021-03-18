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
                <Link to="/ooooo" style={{ fontSize: "34px", marginLeft: "70%" }}
                onClick={() => {
                    // props.history.push(`/`) 
                    //  logOut;//
                    props.setUser("");
                }}>Sing Out
                    <FontAwesomeIcon icon={['fas', 'user-circle']}></FontAwesomeIcon>
                </Link>

                <h6>{props.user && props.user.username} </h6>
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
