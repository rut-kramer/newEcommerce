import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Nis from "../../nis";

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

import "./ecommerceHeader.css"
import { actions } from "../../redux/action";
import { connect } from "react-redux";



//img xd
import interior from "../../assets/img/xd/interior-with-white-sofa@2x.png";
import img3 from "../../assets/img/xd/ia_300000045.png"
import aa from "../../assets/img/bg1.jpg"


function EcommerceHeader(props) {
  const [items, setItem] = useState([
    {

      src: "url(" + interior + ")",
      altText: "",
      caption: "",
    },
    {
      src: "url( " + props.homeStoreDesign.image + ")",
      altText: "",
      caption: "",
    },
    {
      src: "url(" + img3 + ")",
      altText: "",
      caption: "",
    },
    {
      src: "url(" + interior + ")",
      altText: "",
      caption: "",
    },
    {
      src: "url(" + interior + ")",
      altText: "",
      caption: "",
    },

  ]);
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
      altText: "",
      caption: "",
    }

    setItem([...items, img])
  }
  return (
    <div className="carouelImgHover">
      <button onClick={addImg}>add img</button>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}
      >
        <CarouselIndicators
          items={props.ImagesArr}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {props.ImagesArr.map((item) => {
          return (
            <CarouselItem
              onExiting={onExiting}
              onExited={onExited}
              key={item.src}

            >
              <div className="page-header header-filter">
                <div
                  className="page-header-image"
                  style={{
                    backgroundImage: item.src,
                  }}
                ></div>
                {/* <div className="content-center text-center">
                  <Row>
                    <Col className="ml-auto mr-auto" md="8">
                      <input
                        className="title-EcommerceHeader-input"
                        value={props.title ? props.title : props.objectFields.storeName}
                        onChange={(e) => props.setTitle(e.target.value)}
                        onClick={() => props.changeCurrentComponent("HomeConfigurator")}
                        style={{
                          textAlign: props.alignment ? props.alignment : 'center',
                        }}
                      ></input>
                    </Col>
                  </Row>
                </div>
              */}
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
    ImagesArr: state.carouselImgReducer.ImagesArr
  }
}
const mapDispatchToProps = (dispatch) => ({
  setTitle: (e) => dispatch(actions.setTitle(e)),
  changeCurrentComponent: (e) => dispatch(actions.setCurrentComponent(e)),

})
export default connect(mapStateToProps, mapDispatchToProps)(EcommerceHeader);