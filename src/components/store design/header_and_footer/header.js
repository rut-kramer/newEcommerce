import React, { Component } from 'react';
import { connect } from "react-redux";
import { actions } from "../../../redux/action"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import tempLogo from '../../../assets/leader_logo.png';

function Header(props) {
    let categories = props.categories[0]
    return (
        <div>
            <header className="header js-header">
                <div className="header__center center">
                    {
                        <Link to={"/" + props.objectFields.urlRoute} className="header__logo" onClick={props.changeCurrentComponent("LOGO")}>
                            {props.logoDesign.LogoYOrN === true ?
                                <img className="" src={props.objectFields.logoStore ? props.objectFields.logoStore : tempLogo} alt=""
                                    style={{ borderRadius: props.logoDesign.logoBorderRadiusLogo }}
                                    width={props.logoDesign.logoWidth ? props.logoDesign.logoWidth + 'vw' : '100vw'}
                                    height="auto" className="logoK"
                                ></img> : <button onClick={props.changeLogoYOrN}><h1>+</h1></button>
                            }
                        </Link>
                    }
                    {/* //שליפת בלולאה הקטגוריות  */}
                    {props.categories.map((item, index) =>
                    (
                        <ul className="mapCategory">
                            <li key={index}> {item.categoryName}</li>
                        </ul>
                    ))
                    }
                    < h2 > כאן יהיה תפריט ניווט</h2>
                    <div class="topnav" style={{
                        backgroundColor: props.objectFields.colorStore,
                        overflow: "hidden",
                        width: "82%"
                    }}
                        id="myTopnav">
                        {props.categories.map((item, index) =>
                        (
                            <Link key={index} to={"/" + objectFields.urlRoute + "/" + item.categoryName} style={{
                                float: "right",
                                display: "block",
                                color: "#f2f2f2",
                                textAlign: "center",
                                padding: "14px 16px",
                                textDecoration: "none",
                                fontSize: "17px"
                            }} class="active">{item.categoryName}</Link>
                        ))
                        }
                    </div>
                </div>
            </header >
        </div >
    )
}


const mapStateToProps = (state) => {
    return {
        logoDesign: state.logoReducer.logoDesign,
        objectFields: state.storeReducer.objectFields,
        categories: state.categoriesReducer.categories,
    }
}
const mapDispatchToProps = (dispatch) => ({
    changeCurrentComponent: (e) => dispatch(actions.setCurrentComponent(e)),
    changeLogoYOrN: () => dispatch(actions.setLogoYOrN()),
})
export default connect(mapStateToProps, mapDispatchToProps)(Header);
