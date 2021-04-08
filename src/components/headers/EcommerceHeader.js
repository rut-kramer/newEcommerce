import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "../../redux/action";
import "./ecommerceHeader.css"

//img xd
import aa from "../../assets/img/bg1.jpg"


function EcommerceHeader(props) {
  const history = useHistory();
  const location = useLocation();

  function openMediaGallery(index) {
    props.setChangeImgInCurrentLocation(index)
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
    const nextIndex = activeIndex === props.ImagesArr.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
    props.setCurrentIndexFromCarousl(nextIndex)
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? props.ImagesArr.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
    props.setCurrentIndexFromCarousl(nextIndex)

  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
    props.setCurrentIndexFromCarousl(newIndex)

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
              color: props.color ? props.color : "white",
              fontSize: props.size ? props.size : "100 px"
            }}
          ></input>
        </div> : ""
      }
      <Carousel activeIndex={activeIndex} next={next} previous={previous}
      >
        {
          props.ImagesArr.length != 1 &&
          <CarouselIndicators
            items={props.ImagesArr}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
            className="EH-carouselIndicators"
          />
        }

        {props.ImagesArr.map((item, index) => {
          return (
            <CarouselItem
              onExiting={onExiting}
              onExited={onExited}
              key={"url(" + item.src + ")"}

            >
              <div
                onClick={() => openMediaGallery(index)}
                className="page-header header-filter carouelImgHover"
              >
                <div
                  className="page-header-image"
                  style={{
                    backgroundImage: "url(" + item.src + ")"

                  }}
                ></div>

              </div>
            </CarouselItem>
          );
        })}

        {/* מכאן זה האיקונים של החיצים לשמאל ולימין */}
        {props.ImagesArr.length != 1 &&
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
          </>
        }
      </Carousel>



    </div>);
}

const mapStateToProps = (state) => {
  return {
    objectFields: state.storeReducer.objectFields,
    homeStoreDesign: state.storeHomeReducer.homeStoreDesign,
    title: state.bullPageEditReducer.title,
    alignment: state.bullPageEditReducer.alignment,
    color: state.bullPageEditReducer.color,
    size: state.bullPageEditReducer.size,
    ImagesArr: state.carouselImgReducer.ImagesArr,
    collapseOfRedux: state.bullPageEditReducer.collapse,
    ifDisplayTitle: state.bullPageEditReducer.ifDisplayTitle,

  }
}
const mapDispatchToProps = (dispatch) => ({
  setTitle: (e) => dispatch(actions.setTitle(e)),
  changeCurrentComponent: (e) => dispatch(actions.setCurrentComponent(e)),
  setImagesArr: (img) => dispatch(actions.setImagesArr(img)),
  setCollapse: (collapseOfRedux) => dispatch(actions.setCollapse(collapseOfRedux)),
  setChangeImgInCurrentLocation: (location) => dispatch(actions.setChangeImgInCurrentLocation(location)),
  setfunctionToSetImage: (location) => dispatch(actions.setfunctionToSetImage(location)),
  setImageLocation: (location) => dispatch(actions.setImageLocation(location)),
  setCurrentIndexFromCarousl: (index) => dispatch(actions.setCurrentIndexFromCarousl(index))
})
export default connect(mapStateToProps, mapDispatchToProps)(EcommerceHeader);