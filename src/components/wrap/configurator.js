import React, { useState } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import './wrap-component.css'
import Home from "../home";
import OpenStore from "../openStore";
import AddCategory from '../store setting/category_managment/addCategory';
import AddProduct from '../store setting/product_management/addProduct';
import EditProduct from '../store setting/product_management/editProduct';
import EditCategory from '../store setting/category_managment/editCategory';
import EditAttribute from '../store setting/attribute_management/editAttribute'
import HomeConfigurator from "../store design/all_configurators/home/homeConfigurator"
import HeaderConfigurator from "../store design/all_configurators/home/headerConfigurator"
import SliderConfigurator from "../store design/all_configurators/home/sliderConfigurator"

function Configurator(props) {
    const [adminLink, setAdminLink] = useState(true)
    return (
        <>
            {
                <div className="Configurator-configurator-28 Configurator-configuratorOpen-29" style={{ width: props.flag ? "17%" : "0" }}>
                    <div className="MuiDrawer-paperAnchorRight MuiDrawer-paperAnchorDockedRight MuiDrawer-paper Configurator-drawerPaper-50" style={{ transform: props.flag ? "translate(0px)" : "translate(-100%)" }}>
                        <div className="con-title">
                            Home Page
                            <Link to={'/' + props.objectFields.urlRoute + (adminLink ? '/admin' : '')} onClick={() => { setAdminLink(!adminLink) }}>
                                <span className="material-icons pointer">settings</span>
                            </Link>
                        </div>
                        {
                            props.currentComponent ? (() => {
                                switch (props.currentComponent) {
                                    case "Home": return <Home />;
                                    case "OpenStore": return <OpenStore />;
                                    case "AddCategory": return <AddCategory />;
                                    case "AddProduct": return <AddProduct />;
                                    case "EditProduct": return <EditProduct />;
                                    case "EditCategory": return <EditCategory />;
                                    case "EditAttribute": return <EditAttribute />;
                                    case "HomeConfigurator": return <HomeConfigurator />;
                                    case "HeaderConfigurator": return <HeaderConfigurator />;
                                    case "SliderConfigurator": return <SliderConfigurator />
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
        objectFields: state.storeReducer.objectFields,
        currentComponent: state.wrapReducer.currentComponent
    }
}
const mapDispatchToProps = (dispatch) => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(Configurator);

