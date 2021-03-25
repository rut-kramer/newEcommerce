import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MediaGallery from '../store design/media_gallery/mediaGallery'
import { Link } from 'react-router-dom'

// reactstrap components
import {
  Button,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  Container,
} from "reactstrap";
import { useHistory } from "react-router-dom";

import "./ecommerceHeader.css"
import { actions } from "../../redux/action";
import { connect } from "react-redux";
//img xd
import aa from "../../assets/img/bg1.jpg"


function EcommerceHeader(props) {
  const history = useHistory();


  function openMediaGallery() {
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
    const nextIndex = activeIndex === props.ImagesArr.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? props.ImagesArr.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  // הוספת תמונה
  const addImg = () => {
    let img =
    {
      src: "url(" + aa + ")",
    }
    props.setImagesArr(img)
  }
  return (
    <div>
      <button onClick={addImg}>add img</button>
      {props.ifDisplayTitle ?
        <div className="bullcommerceTitle">
          <input className="bullcommerceTitleInput"
            value={props.title ? props.title : props.objectFields.storeName}
            onChange={(e) => props.setTitle(e.target.value)}
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
          items={props.ImagesArr}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
          className="EH-carouselIndicators"
        />
        {props.ImagesArr.map((item) => {
          return (
            <CarouselItem
              onExiting={onExiting}
              onExited={onExited}
              key={item.src}

            >
              <div
                onClick={openMediaGallery}
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
        })}

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
    ImagesArr: state.carouselImgReducer.ImagesArr,
    collapseOfRedux: state.bullPageEditReducer.collapse,
    ifDisplayTitle: state.bullPageEditReducer.ifDisplayTitle
  }
}
const mapDispatchToProps = (dispatch) => ({
  setTitle: (e) => dispatch(actions.setTitle(e)),
  changeCurrentComponent: (e) => dispatch(actions.setCurrentComponent(e)),
  setImagesArr: (img) => dispatch(actions.setImagesArr(img)),
  setCollapse: (collapseOfRedux) => dispatch(actions.setCollapse(collapseOfRedux)),
})
export default connect(mapStateToProps, mapDispatchToProps)(EcommerceHeader);