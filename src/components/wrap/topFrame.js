import React from 'react'
import { Link } from 'react-router-dom';
import appleIcon from '../../assets/apple-touch-icon.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// public/apple-touch-icon'
function TopFrame({ setFlagCon }) {
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
                        marginLeft: "10px"
                    }}>
                    <h2>=</h2>
                </button> */}
                {/* <div> */}
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
                        <img alt="logo" src={appleIcon} style={{ maxWidth: "28%", paddingLeft: "2%"}}></img>
                    </Link>
                {/* </div> */}
                <Link to="/ooooo" style={{ fontSize: "34px" , marginLeft: "70%"}}>
                    <FontAwesomeIcon icon={['fas', 'user-circle']}></FontAwesomeIcon>
                </Link>
            </div>
        </div>
    )
}
export default TopFrame;
// export default connect(mapStateToProps, mapDispatchToProps)(TopFooter);
