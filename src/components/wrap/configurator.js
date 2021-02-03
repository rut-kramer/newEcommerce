import React from 'react';
import { connect } from "react-redux";

import './wrap-component.css'
import Home from "../home";
import OpenStore from "../openStore";



function Configurator(props) {
    return (
        <div className="Configurator-configurator-28 Configurator-configuratorOpen-29">
            <div className="MuiDrawer-paperAnchorRight MuiDrawer-paperAnchorDockedRight MuiDrawer-paper Configurator-drawerPaper-50">
                <h3>למקם פה קונפיגורטור</h3>
                {
                    props.currentComponent ? (() => {
                        switch (props.currentComponent) {
                            case "Home": return <Home />;
                            case "OpenStore": return <OpenStore />;
                        }
                    })() :
                        <h3>No component was selected!</h3>
                }





            </div>
        </div>
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

