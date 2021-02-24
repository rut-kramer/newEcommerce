import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import './wrap-component.css'
import Home from "../home";
import OpenStore from "../openStore";



function Configurator(props) {
    return (
        <>
            {
                // props.flag&&
                <div className="Configurator-configurator-28 Configurator-configuratorOpen-29" style={{ width: props.flag ? "15%" : "0" }}>
                    <div className="MuiDrawer-paperAnchorRight MuiDrawer-paperAnchorDockedRight MuiDrawer-paper Configurator-drawerPaper-50" style={{ transform: props.flag ? "translate(0px)" : "translate(-100%)" }}>
                        <div className="con-title">
                                Home Page
                            <Link to='/0/admin'>
                                <span class="material-icons pointer">settings</span>
                            </Link>
                        </div>
                        {
                            props.currentComponent ? (() => {
                                switch (props.currentComponent) {
                                    case "Home": return <Home />;
                                    case "OpenStore": return <OpenStore />;
                                    default:
                                }
                            })() :
                                <h3>No component was selected!</h3>
                        }





                    </div>
                </div>
            }
        </>
    )
}



const mapStateToProps = (state) => {
    return {
        currentComponent: state.wrapReducer.currentComponent
    }
}
const mapDispatchToProps = (dispatch) => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(Configurator);

