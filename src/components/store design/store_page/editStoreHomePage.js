import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { actions } from "../../../redux/action"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Carousel from 'react-elastic-carousel'
// import '../../App.css';
import FitureProduct from './fitureProductToHomePage';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
///images  
import productPic7 from "../../../assets/product-pic-7.png"

function editStoreHomePage(props) {

    //פונקציה שטוענת את התמונה
    const onChangeHandlerImage = (event) => {
        if (event) {
            let reader = new FileReader();
            reader.onloadend = () => {
                props.changeImage(reader.result)
            }
            reader.readAsDataURL(event)
        }
    }
    //בשביל המסגרת של התמונה כי את הצבע מקבל מהרידקס
    let a = "5px solid ";

    let categories = props.categories[0] ? props.categories : [{ categoryName: "foo", images: "", color: "yellow", products: [] }, { categoryName: "foo", images: "", color: "yellow", products: [] }, { categoryName: "foo", images: "", color: "yellow", products: [] }]


    return (

        <div>
            <div className="main section">
                <div className="main__center center"
                >
                    <div className="main__container">
                        <div className="main__details"
                            style={{ borderRadius: props.homeStoreDesign.BorderRadius.pictureFrame + "px" }}
                            onClick={() => props.changeCurrentComponent('textOnThePicture')}
                        >
                            <TextareaAutosize className="SPtitle col-md-12" value=
                                {"NAME STORE:" + props.objectFields.nameStore + "        " +
                                    "  DESCRIPTION:  " + props.objectFields.descriptionStore}
                                style={{
                                    fontFamily: props.homeStoreDesign.titleFont.onThePicture,
                                    fontWeight: props.homeStoreDesign.titleTextWeight.onThePicture,
                                    fontSize: props.homeStoreDesign.titleTextSize.onThePicture + "px",
                                    lineHeight: props.homeStoreDesign.titleLineHeight.onThePicture,
                                    color: props.homeStoreDesign.titleColorText.onThePicture,
                                    textAlign: props.homeStoreDesign.titleAlignment.titleCategory ? props.homeStoreDesign.titleAlignment.titleCategory : 'left',
                                    marginTop: '2vh'
                                }}
                                onChange={(e) => props.changeTextTitle(e.target.value)} />
                        </div>
                        <div className="main__preview"
                            style={{ border: a + props.objectFields.colorStore, borderRadius: props.homeStoreDesign.BorderRadius.pictureFrame + "px" }}
                        >
                            <label for='fileInput' onClick={() => props.changeCurrentComponent("Image")}>
                                {props.homeStoreDesign.imageYOrN ?
                                    <img alt="" src={props.homeStoreDesign.imageImage ?
                                        props.homeStoreDesign.imageImage : productPic7}
                                        style={{
                                            borderRadius: props.homeStoreDesign.ImageBorderRadiusImage,
                                            width: props.homeStoreDesign.ImageWidth ? props.homeStoreDesign.ImageWidth + 'vw' : '40vw',
                                            height: props.homeStoreDesign.imageHeight ? props.homeStoreDesign.imageHeight + 'vh' : ''
                                        }}
                                    ></img>
                                    : <span></span>}
                            </label>
                            <input type={"file"}
                                id="fileInput"
                                htmlFor="myInput"
                                accept="image/*"
                                style={{
                                    cursor: 'pointer',
                                    display: 'none',
                                }}
                                onChange={(e) => onChangeHandlerImage(e.target.files[0])} >
                            </input>
                        </div>
                    </div>
                </div >
            </div >
            <div className="categories section">
                <div className="categories__center center ">
                    <div className="categories__stage stage">- The Categories</div>
                    <div className="a" onClick={() => props.changeCurrentComponent('TextTitleOfCategory')}>
                        <TextareaAutosize className="SPtitleOfCategory col-md-12" value=
                            {props.homeStoreDesign.titleText.titleCategory ? props.homeStoreDesign.titleText.titleCategory : "Browse by Category"}
                            style={{
                                fontFamily: props.homeStoreDesign.titleFont.titleCategory,
                                fontWeight: props.homeStoreDesign.titleTextWeight.titleCategory,
                                fontSize: props.homeStoreDesign.titleTextSize.titleCategory + "px",
                                lineHeight: props.homeStoreDesign.titleLineHeight.titleCategory, color: props.homeStoreDesign.titleColorText.titleCategory,
                                textAlign: props.homeStoreDesign.titleAlignment.titleCategory ? props.homeStoreDesign.titleAlignment.titleCategory : 'left',
                                marginTop: '2vh'
                            }}
                            onChange={(e) => props.changeTextTitle(e.target.value)} />
                    </div>
                    <div className="categories__container ">
                        <div className="categories__slider js-slider-categories
                    slick-initialized slick-slider">
                            <Carousel className="carousel" itemsToShow={3}>
                                {
                                    // state.categoriesReducer.categories[0] ?
                                    categories.map((item, index) => (
                                        <div className="categories__slide" key={index}>
                                            {/* //למשתמש זה צריך להיות לינק שמקשר לקטגוריה הנוכחית ולא דיב */}
                                            {/* //השארתי לינק אחד לדוגמא */}
                                            {/* <Link className="categories__item" to="/0/category">
                                        <div className="categories__icon"><img className="categories__pic" src={shoppingBag} alt=""></img>
                                        </div>
                                        <div className="categories__text">On Sale</div>
                                        </Link> */}
                                            {/*  לסדר בצורה הגיונית! למה לכתוב הכל פעמיים ? י */}
                                            {props.viewModel.viewMode ?
                                                <Link className="categories__item" to={props.viewModel.viewMode ? "" : "/category"}
                                                    style={{ borderRadius: props.homeStoreDesign.BorderRadius.category + "px" }}
                                                >
                                                    <div className="categories__icon"
                                                    >
                                                        <h1
                                                            style={{
                                                                color: props.homeStoreDesign.iconColor,
                                                                fontSize: props.homeStoreDesign.iconSize + "px"
                                                            }}>
                                                            איקון לפי קטגוריה
                                                    </h1>
                                                    </div>

                                                    <div
                                                        className="categories__text"
                                                        style={{
                                                            fontFamily: props.homeStoreDesign.titleFont.textIntoCategory,
                                                            fontWeight: props.homeStoreDesign.titleTextWeight.textIntoCategory,
                                                            fontSize: props.homeStoreDesign.titleTextSize.textIntoCategory + "px",
                                                            lineHeight: props.homeStoreDesign.titleLineHeight.textIntoCategory, color: props.homeStoreDesign.titleColorText.textIntoCategory,
                                                            textAlign: this.props.homeStoreDesign.titleAlignment.textIntoCategory ? this.props.homeStoreDesign.titleAlignment.textIntoCategory : 'left',
                                                            marginTop: '2vh'
                                                        }}
                                                    // onChange={(e) => this.props.changeTextTitle(e.target.value)}

                                                    >{item.categoryName}</div>

                                                </Link>
                                                :

                                                <div className="categories__item" onClick={() => props.changeCurrentComponent("TextIntoCategory")}
                                                    style={{ borderRadius: props.homeStoreDesign.BorderRadius.category + "px" }}
                                                >
                                                    <div className="categories__icon"
                                                    //קומפוננטת שנשלחת לקונפיגורטור לעריכת איקון 
                                                    // onClick={() => this.props.changeCurrentComponent("IconEdit")}
                                                    >
                                                        {/* <img className="categories__pic" src={item.image ? item.image : shoppingBag} alt="" */}
                                                        <h1
                                                            style={{
                                                                color: props.homeStoreDesign.iconColor,
                                                                fontSize: props.homeStoreDesign.iconSize + "px"
                                                            }}>
                                                            איקון לפי קטגוריה
                                                    </h1>
                                                    </div>

                                                    <div
                                                        className="categories__text"
                                                        style={{
                                                            fontFamily: props.homeStoreDesign.titleFont.textIntoCategory,
                                                            fontWeight: props.homeStoreDesign.titleTextWeight.textIntoCategory,
                                                            fontSize: props.homeStoreDesign.titleTextSize.textIntoCategory + "px",
                                                            lineHeight: props.homeStoreDesign.titleLineHeight.textIntoCategory, color: props.homeStoreDesign.titleColorText.textIntoCategory,
                                                            textAlign: this.props.homeStoreDesign.titleAlignment.textIntoCategory ? this.props.homeStoreDesign.titleAlignment.textIntoCategory : 'left',
                                                            marginTop: '2vh'
                                                        }}
                                                    // onChange={(e) => this.props.changeTextTitle(e.target.value)}

                                                    >{item.categoryName}</div>
                                                </div>
                                            }
                                        </div>

                                    ))
                                }
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <div className="products products_main section">
                <div className="products__center center">
                    <div className="products__stage stage">- Our Products </div>
                    <div className="a" onClick={() => props.changeCurrentComponent('TextTitleOfProduct')}>
                        <TextareaAutosize className="SPtitleOfCategory col-md-12" value=
                            {props.homeStoreDesign.titleText.titleProduct ? props.homeStoreDesign.titleText.titleProduct : "Explore out Products"}
                            style={{
                                fontFamily: props.homeStoreDesign.titleFont.titleProduct,
                                fontWeight: props.homeStoreDesign.titleTextWeight.titleProduct,
                                fontSize: props.homeStoreDesign.titleTextSize.titleProduct + "px",
                                lineHeight: props.homeStoreDesign.titleLineHeight.titleProduct, color: props.homeStoreDesign.titleColorText.titleProduct,
                                textAlign: props.homeStoreDesign.titleAlignment.titleProduct ? props.homeStoreDesign.titleAlignment.titleProduct : 'left',
                                marginTop: '2vh'
                            }}
                            onChange={(e) => props.changeTextTitle(e.target.value)} />
                    </div>


                    <div className="products__list">
                        {/* //שליחה לקומפוננטה ששם שולפים את המוצרים המקודמים */}
                        <FitureProduct />
                    </div>
                </div>
            </div>
            <div className="about section">
                <div className="about__center center">
                </div>
            </div>
        </div >
    )
}
const mapStateToProps = (state) => {
    return {
        objectFields: state.storeReducer.objectFields,
        categories: state.categoriesReducer.categories,
        homeStoreDesign: state.editHomeStoreReducer.homeStoreDesign,
        viewModel: state.wrapReducer.viewModel,

    }
}
const mapDispatchToProps = (dispatch) => ({
    changeCurrentComponent: (e) => dispatch(actions.setCurrentComponent(e)),
    changeLogoYOrN: () => dispatch(actions.setLogoYOrN()),
    changeImage: (e) => dispatch(actions.setImage(e)),
    changeTextTitle: (e) => dispatch(actions.setTitleText({ k: "onThePicture", e })),


})
export default connect(mapStateToProps, mapDispatchToProps)(editStoreHomePage);


/////////////////////////////


