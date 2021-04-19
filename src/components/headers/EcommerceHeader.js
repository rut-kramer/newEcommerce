import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";
import { useHistory, useLocation } from "react-router-dom";

import { connect } from "react-redux";
import { actions } from "../../redux/action";
import "./ecommerceHeader.css"

//img xd


function EcommerceHeader(props) {
  const history = useHistory();
  const location = useLocation();


  function openMediaGallery(index) {
    props.setChangeImgInCurrentLocation(index);
    props.setfunctionToSetImage("setImagesArr")
    props.setImageLocation(location.pathname)
    history.push("/" + props.objectFields.urlRoute + "/mediaGallery/uploudImage");
  }


  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const sliderImg = activeIndex === props.bhd.sliderImages.length - 1 ? 0 : activeIndex + 1;
    const nextIndex = activeIndex === props.ImagesArr.length - 1 ? 0 : activeIndex + 1;
    if (Array.isArray(props.bhd.sliderImages) && props.bhd.sliderImages.length > 0) {
      setActiveIndex(sliderImg);
      props.setCurrentIndexFromCarousl(sliderImg)
    }
    else {
      setActiveIndex(nextIndex);
      props.setCurrentIndexFromCarousl(nextIndex)
    }
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? props.ImagesArr.length - 1 : activeIndex - 1;
    const sliderImg = activeIndex === 0 ? props.bhd.sliderImages.length - 1 : activeIndex - 1;
    if (Array.isArray(props.bhd.sliderImages) && props.bhd.sliderImages.length > 0) {
      setActiveIndex(sliderImg);
      props.setCurrentIndexFromCarousl(sliderImg)
    }
    else {
      setActiveIndex(nextIndex);
      props.setCurrentIndexFromCarousl(nextIndex)

    }
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
    props.setCurrentIndexFromCarousl(newIndex)

  };

  // useEffect(function () {
  //   return function exit() {
  //     alert("exit")
  //     //     if (window.confirm("אם אתה בטוח שברצונך למחוק את החנותן"))

  //     //     else
  //     //       alert('מזל שהתחרטת...')
  //   }
  // }, []);

  return (
    <div>
      {props.ifDisplayTitle ?
        <div className="bullcommerceTitle">
          <input className="bullcommerceTitleInput"

            value={(props.bhd.title && (props.bhd.title !== undefined || props.bhd.title !== null)) ? props.bhd.title.textContent : props.objectFields.storeName}
            onChange={(e) => props.setBhTitle(e.target.value)}
            onClick={(e) => {
              props.changeCurrentComponent("HomeConfigurator");
              props.setCollapse("slider");
            }}
            style={{
              textAlign: props.alignment ? props.alignment : 'center',
              color: props.color ? props.color : "white",
              fontSize: props.size ? props.size : "100 px"
            }}
          ></input>
        </div> : ""
      }
      <Carousel activeIndex={activeIndex} next={next} previous={previous}
      >
        <CarouselIndicators
          items={(Array.isArray(props.bhd.sliderImages) && props.bhd.sliderImages.length > 0) ? props.bhd.sliderImages : props.ImagesArr}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
          className="EH-carouselIndicators"
        />
        {(Array.isArray(props.bhd.sliderImages) && props.bhd.sliderImages.length > 0) ?
          props.bhd.sliderImages.map((item, index) => {
            return (
              <CarouselItem
                onExiting={onExiting}
                onExited={onExited}
                key={'url(' + item + ')'}
              >
                {props.isAdmin ?
                  <div
                    onClick={() => openMediaGallery(index)}
                    className="page-header header-filter carouelImgHover"
                  >
                    <div
                      className="page-header-image"
                      style={{
                        backgroundImage: 'url(' + item + ')'
                      }}
                    ></div>

                  </div>
                  :
                  <div
                    className="page-header header-filter"
                  >
                    <div
                      className="page-header-image"
                      style={{
                        backgroundImage: 'url(' + item + ')'
                      }}
                    ></div>

                  </div>
                }





              </CarouselItem>
            );
          }) :
          props.ImagesArr.map((item, index) => {
            return (
              <CarouselItem
                onExiting={onExiting}
                onExited={onExited}
                key={item.src}

              >
                <div
                  onClick={() => openMediaGallery(index)}
                  className="page-header header-filter carouelImgHover"
                >
                  <div
                    className="page-header-image"
                    style={{
                      backgroundImage: item.src
                    }}
                  ></div>

                </div>
              </CarouselItem>
            );
          }
          )}


        {/* מכאן זה האיקונים של החיצים לשמאל ולימין */}
        {
          props.ImagesArr.length != 1 &&
          <>
            <a
              className="left carousel-control carousel-control-prev"
              data-slide="prev"
              href="#pablo"
              onClick={(e) => {
                e.preventDefault();
                previous();
              }}
              role="button"
            >
              <Button
                className="btn-icon btn-round btnToArrow"
                name="button"
                size="sm"
                type="button"
                style={{ backgroundColor: "transparent" }}
              >
                <FontAwesomeIcon icon={['fas', 'chevron-left']} className="EH-chevron">
                </FontAwesomeIcon>
              </Button>
            </a>
            <a
              className="right carousel-control carousel-control-next EH-aOfBtn"
              data-slide="next"
              href="#pablo"
              onClick={(e) => {
                e.preventDefault();
                next();
              }}
              role="button"
            >
              <Button
                className="btn-icon btn-round btnToArrow"
                name="button"
                size="sm"
                type="button"
                style={{ backgroundColor: "transparent" }}

              >
                <FontAwesomeIcon icon={['fas', 'chevron-right']} className="EH-chevron">
                </FontAwesomeIcon>                                                                                </Button>
            </a>
          </>
        }
      </Carousel >



    </div >);
}

const mapStateToProps = (state) => {
  return {
    objectFields: state.storeReducer.objectFields,
    homeStoreDesign: state.storeHomeReducer.homeStoreDesign,
    title: state.bullPageEditReducer.title,
    alignment: state.bullPageEditReducer.alignment,
    color: state.bullPageEditReducer.color,
    size: state.bullPageEditReducer.size,
    ImagesArr: state.BHD.ImagesArr,
    collapseOfRedux: state.bullPageEditReducer.collapse,
    ifDisplayTitle: state.bullPageEditReducer.ifDisplayTitle,
    bhd: state.BHD.bullcommerceHeaderDesign,
    isAdmin: state.viewOrEditReducer.isAdmin
  }
}
const mapDispatchToProps = (dispatch) => ({
  setTitle: (e) => dispatch(actions.setTitle(e)),
  changeCurrentComponent: (e) => dispatch(actions.setCurrentComponent(e)),
  setCollapse: (collapseOfRedux) => dispatch(actions.setCollapse(collapseOfRedux)),
  setChangeImgInCurrentLocation: (location) => dispatch(actions.setChangeImgInCurrentLocation(location)),
  setfunctionToSetImage: (location) => dispatch(actions.setfunctionToSetImage(location)),
  setImageLocation: (location) => dispatch(actions.setImageLocation(location)),
  setCurrentIndexFromCarousl: (index) => dispatch(actions.setCurrentIndexFromCarousl(index)),
  setBhTitle: (x) => dispatch(actions.setBhTitle(x))

})
export default connect(mapStateToProps, mapDispatchToProps)(EcommerceHeader);