import React, { useState } from 'react';
import { connect } from "react-redux";
import { actions } from '../../redux/action';
import { Link } from 'react-router-dom';
import './wrap-component.css'
import Home from "../home";
import AddCategory from '../store setting/category_managment/addCategory';
import AddProduct from '../store setting/product_management/addProduct';
import EditProduct from '../store setting/product_management/editProduct';
import EditCategory from '../store setting/category_managment/editCategory';
import EditAttribute from '../store setting/attribute_management/editAttribute'
import HeaderConfigurator from "../store design/all_configurators/home/headerConfigurator"
import CategoryMenu from "../store design/all_configurators/category/categoryMenu";
import SliderConfigurator from "../store design/all_configurators/home/sliderConfigurator"
import ProductConfigurator from "../store design/all_configurators/product/productConfigurator"

import HomeConfigurator from "../store design/all_configurators/home/homeConfigurator.js"
function Configurator(props) {
    const [adminLink, setAdminLink] = useState(true);

    const publishStore = () => {
        debugger
        props.editBullcommerceHeader(props.bullcommerceHeaderDesign);
    }

    return (
        <>
            {
                <div className="Configurator-configurator-28 Configurator-configuratorOpen-29" style={{ width: props.flag ? "17%" : "0" }}>
                    <div className="MuiDrawer-paperAnchorRight MuiDrawer-paperAnchorDockedRight MuiDrawer-paper Configurator-drawerPaper-50" style={{ transform: props.flag ? "translate(0px)" : "translate(-100%)" }}>
                        <div className="con-title">
                            Home Page
            <Link to={'/' + (props.objectFields.urlRoute ? props.objectFields.urlRoute : props.objectFields.storeName) + (adminLink ? '/admin' : '')} onClick={() => { setAdminLink(!adminLink) }}>
                                <span className="material-icons pointer">settings</span>
                            </Link>
                        </div>
                        {
                            props.currentComponent ? (() => {
                                switch (props.currentComponent) {
                                    case "Home": return <Home />;
                                    case "AddCategory": return <AddCategory />;
                                    case "AddProduct": return <AddProduct />;
                                    case "EditProduct": return <EditProduct />;
                                    case "EditCategory": return <EditCategory />;
                                    case "EditAttribute": return <EditAttribute />;
                                    case "HeaderConfigurator": return <HeaderConfigurator />;
                                    case "SliderConfigurator": return <SliderConfigurator />;
                                    case "ProductConfigurator": return <ProductConfigurator />;
                                    case "HomeConfigurator": return <HomeConfigurator />;
                                    case "CategoryMenu": return <CategoryMenu />;
                                }
                            })() :
                                <h3>No component was selected!</h3>
                        }


                        <button className="configurator_btn-update" onClick={publishStore}>update</button>

                    </div>
                </div>
            }
        </>
    )
}



const mapStateToProps = (state) => {
    return {
        objectFields: state.storeReducer.objectFields,
        currentComponent: state.wrapReducer.currentComponent,
        bullcommerceHeaderDesign: state.BHD.bullcommerceHeaderDesign
    }
}
const mapDispatchToProps = (dispatch) => ({
    editBullcommerceHeader: (x) => dispatch(actions.editBullcommerceHeaderDesign(x)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Configurator);

