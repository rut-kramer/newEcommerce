import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import MediaGallery from '../store design/media_gallery/mediaGallery'
// import { Link } from 'react-router-dom'

// reactstrap components
import {
  Button,
  // Row,
  // Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  // Container,
} from "reactstrap";
import { useHistory } from "react-router-dom";

import { connect } from "react-redux";
import { actions } from "../../redux/action";
import "./ecommerceHeader.css"

//img xd
import aa from "../../assets/img/bg1.jpg"


function EcommerceHeader(props) {
  const history = useHistory();


  function openMediaGallery(index) {
    props.setChangeImgInCurrentLocation(index)
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
    if (Array.isArray(props.bhd.sliderImages) && props.bhd.sliderImages.length > 0)
      setActiveIndex(sliderImg);
    else
      setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? props.ImagesArr.length - 1 : activeIndex - 1;
    const sliderImg = activeIndex === 0 ? props.bhd.sliderImages.length - 1 : activeIndex - 1;
    if (Array.isArray(props.bhd.sliderImages) && props.bhd.sliderImages.length > 0)
      setActiveIndex(sliderImg);
    else
      setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  return (
    <div>
      {props.ifDisplayTitle ?
        <div className="bullcommerceTitle">
          <input className="bullcommerceTitleInput"
            // value={(props.bhd.title !== undefined) ? props.bhd.title.textContent : props.objectFields.storeName}
            onChange={(e) => props.setBhTitle(e.target.value)}
            onClick={(e) => {
              props.changeCurrentComponent("HomeConfigurator");
              props.setCollapse("slider");
            }}
            style={{
              textAlign: props.alignment ? props.alignment : 'center',
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
            className="btn-icon btn-round"
            name="button"
            size="sm"
            type="button"
            style={{ backgroundColor: "transparent" }}
          >
            <FontAwesomeIcon icon={['fas', 'chevron-left']}>
            </FontAwesomeIcon>
          </Button>
        </a>
        <a
          className="right carousel-control carousel-control-next"
          data-slide="next"
          href="#pablo"
          onClick={(e) => {
            e.preventDefault();
            next();
          }}
          role="button"
        >
          <Button
            className="btn-icon btn-round"
            name="button"
            size="sm"
            type="button"
            style={{ backgroundColor: "transparent" }}

          >
            <FontAwesomeIcon icon={['fas', 'chevron-right']}>
            </FontAwesomeIcon>                                                                                </Button>
        </a>
      </Carousel>



    </div>);
}

const mapStateToProps = (state) => {
  return {
    objectFields: state.storeReducer.objectFields,
    homeStoreDesign: state.storeHomeReducer.homeStoreDesign,
    title: state.bullPageEditReducer.title,
    alignment: state.bullPageEditReducer.alignment,
    ImagesArr: state.BHD.ImagesArr,
    collapseOfRedux: state.bullPageEditReducer.collapse,
    ifDisplayTitle: state.bullPageEditReducer.ifDisplayTitle,
    bhd: state.BHD.bullcommerceHeaderDesign

  }
}
const mapDispatchToProps = (dispatch) => ({
  setTitle: (e) => dispatch(actions.setTitle(e)),
  changeCurrentComponent: (e) => dispatch(actions.setCurrentComponent(e)),
  setCollapse: (collapseOfRedux) => dispatch(actions.setCollapse(collapseOfRedux)),
  setChangeImgInCurrentLocation: (location) => dispatch(actions.setChangeImgInCurrentLocation(location)),
  setBhTitle: (x) => dispatch(actions.setBhTitle(x))

})
export default connect(mapStateToProps, mapDispatchToProps)(EcommerceHeader);