import React from "react";


// reactstrap components
import {
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";

//core
import { connect } from "react-redux";


//img xd
import interior from "../../assets/img/xd/interior-with-white-sofa@2x.png";
import img3 from "../../assets/img/xd/ia_300000045.png"
// core components


function EcommerceHeader(props) {
  const items = [
    {

      src: "url(" + { img3 } + ")",
      // לא מצליחה לקרוא מהרידקס
      // src: props.homeStoreDesign.image,

      content: (
        <Row>
          <Col className="ml-auto mr-auto" md="8">
            <h1 className="title">{props.objectFields.storeName}</h1>
            {/* <h4 className="description text-white">
              The haute couture crowds make stylish statements between shows
              during couture season in Paris...
            </h4> */}
          </Col>
        </Row>
      ),
      altText: "",
      caption: "",
    },
    {
      src: "url( " + props.homeStoreDesign.image + ")",
      content: (
        <Row>
          <Col className="ml-auto mr-auto text-center" md="8">
            <h1 className="title">{props.objectFields.storeName}</h1>
            {/* <h4 className="description text-white">
              See what Karlie Kloss, Tracee Ellis Ross and others wore between the
              shows...
            </h4> */}
          </Col>
        </Row>
      ),
      altText: "",
      caption: "",
    },
    {
      src: "url(" + interior + ")",
      content: (
        <Row>
          <Col className="ml-auto mr-auto" md="8">
            <h1 className="title">{props.objectFields.storeName}</h1>
            {/* <h4 className="description text-white">
              Shirts that actually fit? Check. Linen shorts? Yup. Those wider
              pants suddenly in style? Got them, too....
            </h4> */}
          </Col>
        </Row>
      ),
      altText: "",
      caption: "",
    },
  ];
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
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {items.map((item) => {
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
                <div className="content-center text-center">{item.content}</div>
              </div>
            </CarouselItem>
          );
        })}
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
          <span className="now-ui-icons arrows-1_minimal-left" />
          <span className="sr-only">Previous</span>
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
          <span className="now-ui-icons arrows-1_minimal-right" />
          <span className="sr-only">Next</span>
        </a>
      </Carousel>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    objectFields: state.storeReducer.objectFields,
    homeStoreDesign: state.storeHomeReducer.homeStoreDesign
  }
}
const mapDispatchToProps = (dispatch) => ({
})
export default connect(mapStateToProps, mapDispatchToProps)(EcommerceHeader);