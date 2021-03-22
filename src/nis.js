import React, { useEffect, useState } from 'react'
import AwesomeSlider from 'react-awesome-slider'
import withAutoplay from 'react-awesome-slider/dist/autoplay'
import 'react-awesome-slider/dist/styles.css'
// import './stageImagesCarusel.css'
import { connect } from 'react-redux'
// import iconClockPost from '../../../../assets/Icon-clock-post.png';
import postBoat from '../src/assets/50344.jpg';
 import postGirl from '../src/assets/logo.png';
// import postMan from '../../../../assets/postMan.png';
// import postSnow from '../../../../assets/postSnow.png';
// import Rectangle from '../../../../assets/Rectangle.png'
// import Travel from '../../../../assets/travel.jpg';
// import Fashion from '../../../../assets/fashion.jpg';
// import Cooking from '../../../../assets/cooking.png'
// import Sport from '../../../../assets/sport.png'
// import Events from '../../../../assets/events.png'
// import Elegant from '../../../../assets/elegante.png'
import "./nis.css";
import './nis.css'
const AutoplaySlider = withAutoplay(AwesomeSlider);

function mapStateToProps(state) {
    const arrPosts = []
    const chooseCategory = []
    // state.posts.Posts.map((post) => post.viewInCarusel ? arrPosts.push(post) : "")
    // state.createCategoryReducer.ObjCreateCategory.map((category) => category.categoryName == state.posts.filterPosts ? chooseCategory.push(category) : "")
    return {
        Posts: arrPosts,
        // filterPosts: state.posts.filterPosts,
        ObjChooseCategory: chooseCategory[0]
    };
}


export default connect(mapStateToProps)(function StageImagesCarusel(props) {

    const { Posts, filterPosts, ObjChooseCategory } = props
    //, postSnow, postMan, postBoat, postGirl, postMan, postSnow
    const arrPostImg = [postBoat , postGirl]
    let allImagesCategories = [
        { "Travel": Travel }, { "Business": Rectangle }, { "Fashion": Fashion }, { "Cooking": Cooking }
        , { "Sport": Sport }, { "Events": Events }, { "Elegant": Elegant }
    ];
    let currentImageCategories, currentKey;

    for (let imageCategory of allImagesCategories) {
        currentKey = (Object.keys(imageCategory))[0];
        if (currentKey == filterPosts) {
            currentImageCategories = imageCategory[currentKey];
        }
    }
    return (
        <>
            <div className='carusel-container'>
                {filterPosts == "" || filterPosts == "Home" ? <AutoplaySlider
                    play={true}
                    cancelOnInteraction={false}
                    interval={3000}>
                    {arrPostImg.map((post, index) => <div key={index} className="carusel" >
                        <img className='post-img' src={arrPostImg[index]} />
                    </div>)}
                </AutoplaySlider> :
                    <div >
                        <div className="container">
                            <img className='category-posts-img' src={currentImageCategories} />
                            <div className='texts-post-category'>
                                <h5 className='title-post-category row'>{ObjChooseCategory.categoryName}</h5>
                                <div className="row">
                                    <p style={{ borderRightColor: `${ObjChooseCategory.categoryColor}` }} className='descripsion-post-category col-6 p-0 '>{ObjChooseCategory.categorydescription}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    )
})