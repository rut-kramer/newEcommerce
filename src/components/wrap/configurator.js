import React from 'react';
import { connect } from "react-redux";
import './wrap-component.css'
import Home from "../home";
import OpenStore from "../openStore";
import AddCategory from '../store setting/category_managment/addCategory';
import AddProduct from '../store setting/product_management/addProduct';
import EditProduct from '../store setting/product_management/editProduct';
import EditCategory from '../store setting/category_managment/editCategory';
import EditAttribute from '../store setting/attribute_management/editAttribute'


function Configurator(props) {
    return (
        <div className="Configurator-configurator-28 Configurator-configuratorOpen-29">
            <div className="MuiDrawer-paperAnchorRight MuiDrawer-paperAnchorDockedRight MuiDrawer-paper Configurator-drawerPaper-50">
               
                {
                    props.currentComponent ? (() => {
                        switch (props.currentComponent) {
                            case "Home": return <Home />;
                            case "OpenStore": return <OpenStore />;
                            case "AddCategory": return <AddCategory />;
                            case "AddProduct": return <AddProduct />;
                            case "EditProduct": return <EditProduct />;
                            case "EditCategory": return <EditCategory />;
                            case "EditAttribute": return <EditAttribute/>;
                            
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

