// import React, { Component } from 'react';
// import { connect } from "react-redux";
// import { actions } from "../../../redux/action"
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// class Header extends Component {
//     render() {
//         // var categories = this.props.categories[0]
//         return (
//             <div>
//                 <header className="header js-header">
//                     <div className="header__center center">
//                         {
//                             <Link to="/0/" className="header__logo" onClick={() => this.props.changeCurrentComponent("LOGO")}>
//                                 {this.props.logoDesign.LogoYOrN === true ?
//                                     <img className="" src={this.props.objectFields.logoStore} alt=""
//                                         // <img className="" src={this.props.logoDesign.logo} alt=""
//                                         style={{ borderRadius: this.props.logoDesign.logoBorderRadiusLogo }}
//                                         width={this.props.logoDesign.logoWidth ? this.props.logoDesign.logoWidth + 'vw' : '100vw'}
//                                         height="auto" className="logoK"
//                                     ></img> : <button onClick={this.props.changeLogoYOrN}><h1>+</h1></button>
//                                 }
//                             </Link>
//                         }
//                         {/* //שליפת בלולאה הקטגוריות  */}
//                         {this.props.categories.map((item, index) =>
//                         (
//                             <ul className="mapCategory">
//                                 <li key={index}> {item.categoryName}</li>
//                             </ul>
//                         ))
//                         }
//                         < h2 > כאן יהיה תפריט ניווט</h2>
//                     </div>
//                 </header >
//             </div >
//         )
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         //אפשר לקרוא שם אחר לאוביקט
//         logoDesign: state.logoReducer.logoDesign,
//         objectFields: state.openStoreReducer.objectFields,
//         categories: state.categoriesReducer.categories,

//     }
// }
// const mapDispatchToProps = (dispatch) => ({
//     changeCurrentComponent: (e) => dispatch(actions.setCurrentComponent(e)),
//     changeLogoYOrN: () => dispatch(actions.setLogoYOrN()),
//     setLogoStore: (e) => dispatch(actions.setLogoStore(e)),

// })
// export default connect(mapStateToProps, mapDispatchToProps)(Header);
