import React from 'react'
import { Link } from 'react-router-dom';
import appleIcon from '../../assets/apple-touch-icon.png'
// public/apple-touch-icon'
function TopFrame({setFlagCon}) {
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
                <Link>
                    <img alt="logo" src={appleIcon} style={{maxWidth: "24%"}}></img>
                </Link>
        </div>
    </div>
    )
}
export default TopFrame;
// export default connect(mapStateToProps, mapDispatchToProps)(TopFooter);
