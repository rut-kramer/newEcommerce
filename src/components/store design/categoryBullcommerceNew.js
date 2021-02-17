/*eslint-disable*/
import React from "react";
// plugin that creates slider
import Slider from "nouislider";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Collapse,
  Label,
  FormGroup,
  Input,
  Container,
  InputGroupAddon,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Switch, Route, Link } from "react-router-dom";


// core components
import ScrollTransparentNavbar from "../navbars/ScrollTransparentNavbar.js";
import EcommerceHeader from "../headers/EcommerceHeader.js";
import Footer from "../footers/footer.js";
import FilteredProducts from "./filteredProducts";

import { actions } from '../../redux/action';
import { connect } from 'react-redux';
import FooterOrange from "./footerOrange";


//images
import polo from "../../assets/img/polo.jpg";
import tomFord from "../../assets/img/tom-ford.jpg";
import wooyoungmi from "../../assets/img/wooyoungmi.jpg";
import sweeney from "../../assets/img/sweeney.jpg";
import kingsman from "../../assets/img/kingsman.jpg";
import boglioli from "../../assets/img/boglioli.jpg";
import bg35 from "../../assets/img/bg35.jpg";
import bg40 from "../../assets/img/bg40.jpg";
import saintLaurent1 from "../../assets/img/saint-laurent1.jpg";
import saintLaurent from "../../assets/img/saint-laurent.jpg";
import gucci from "../../assets/img/gucci.jpg";
//xd image
import ia006 from "../../assets/img/xd/ia_300000006.png";
import ia0010 from "../../assets/img/xd/ia_300000010.png";
import ia008 from "../../assets/img/xd/ia_300000008.png";
import cart from "../../assets/img/xd/cart.svg"

function Ecommerce(props) {

  React.useEffect(() => {

    document.body.classList.add("ecommerce-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("ecommerce-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  return (
    <>
      <ScrollTransparentNavbar />
      <div className="wrapper">
        <EcommerceHeader />
        <div className="main">
          <div className="section">
            <Container>
              {/* <h2 className="section-title">Find what you need</h2> */}
              <h2 className="titleCategory">fffff</h2>
              <Row>
                <Col md="3">
                  <div className="collapse-panel">
                    {/*קומפוננטת סינון המוצרים*/}
                    <FilteredProducts></FilteredProducts>
                  </div>
                </Col>
                <Col md="9">
                  <Row>
                    <Col lg="4" md="3">
                      <Card className="card-product card-plain">
                        <div className="card-image">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <img
                              alt="..."
                              src={ia0010}
                            ></img>
                          </a>
                        </div>
                        <CardBody>
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <CardTitle tag="h4">Polo Ralph Lauren</CardTitle>
                          </a>
                          <p className="card-description">
                            Impeccably tailored in Italy from lightweight navy
                            wool.
                          </p>
                          <CardFooter>
                            <div className="price-container">
                              <span className="price">€ 300</span>
                            </div>
                            <Button
                              className="btn-neutral btn-icon btn-round pull-right"
                              color="danger"
                              data-placement="left"
                              id="tooltip719224088"
                            >
                              {/* //אם רוצים להשתמש באיקון הזה צריך לקונות אותו */}
                              {/* <FontAwesomeIcon icon={['far', 'shopping-cart']}></FontAwesomeIcon> */}
                              <Link to="/"><img alt="...."
                                src={cart}></img></Link>
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              placement="left"
                              target="tooltip719224088"
                            >
                              To Cart
                                                        </UncontrolledTooltip>
                            <Button
                              className="btn-neutral btn-icon btn-round pull-right"
                              color="danger"
                              data-placement="left"
                              id="tooltip719224089"

                            >

                              <FontAwesomeIcon className="eye" icon={['far', 'eye']}></FontAwesomeIcon>

                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              placement="left"
                              target="tooltip719224089"
                            >
                              To View
                                                        </UncontrolledTooltip>

                          </CardFooter>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4" md="3">
                      <Card className="card-product card-plain">
                        <div className="card-image">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <img
                              alt="..."
                              src={ia0010}
                            ></img>
                          </a>
                        </div>
                        <CardBody>
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <CardTitle tag="h4">Tom Ford</CardTitle>
                          </a>
                          <p className="card-description">
                            Immaculate tailoring is TOM FORD's forte.
                          </p>
                          <CardFooter>
                            <div className="price-container">
                              <span className="price">€ 879</span>
                            </div>
                            <Button
                              className="btn-neutral btn-icon btn-round pull-right"
                              color="danger"
                              data-placement="left"
                              id="tooltip719224088"
                            >
                              {/* //אם רוצים להשתמש באיקון הזה צריך לקונות אותו */}
                              {/* <FontAwesomeIcon icon={['far', 'shopping-cart']}></FontAwesomeIcon> */}
                              <Link to="/"><img alt="...."
                                src={cart}></img></Link>
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              placement="left"
                              target="tooltip719224088"
                            >
                              To Cart
                                                        </UncontrolledTooltip>
                            <Button
                              className="btn-neutral btn-icon btn-round pull-right"
                              color="danger"
                              data-placement="left"
                              id="tooltip719224089"

                            >

                              <FontAwesomeIcon className="eye" icon={['far', 'eye']}></FontAwesomeIcon>

                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              placement="left"
                              target="tooltip719224089"
                            >
                              To View
                                                        </UncontrolledTooltip>

                          </CardFooter>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4" md="3">
                      <Card className="card-product card-plain">
                        <div className="card-image">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <img
                              alt="..."
                              src={wooyoungmi}
                            ></img>
                          </a>
                        </div>
                        <CardBody>
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <CardTitle tag="h4">Wooyoungmi</CardTitle>
                          </a>
                          <p className="card-description">
                            Dark-grey slub wool, pintucked notch lapels.
                          </p>
                          <CardFooter>
                            <div className="price-container">
                              <span className="price">€ 555</span>
                            </div>

                            <Button
                              className="btn-neutral btn-icon btn-round pull-right"
                              color="danger"
                              data-placement="left"
                              id="tooltip719224088"
                            >
                              {/* //אם רוצים להשתמש באיקון הזה צריך לקונות אותו */}
                              {/* <FontAwesomeIcon icon={['far', 'shopping-cart']}></FontAwesomeIcon> */}
                              <Link to="/"><img alt="...."
                                src={cart}></img></Link>
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              placement="left"
                              target="tooltip719224088"
                            >
                              To Cart
                                                        </UncontrolledTooltip>
                            <Button
                              className="btn-neutral btn-icon btn-round pull-right"
                              color="danger"
                              data-placement="left"
                              id="tooltip719224089"

                            >

                              <FontAwesomeIcon className="eye" icon={['far', 'eye']}></FontAwesomeIcon>

                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              placement="left"
                              target="tooltip719224089"
                            >
                              To View
                                                        </UncontrolledTooltip>

                          </CardFooter>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4" md="3">
                      <Card className="card-product card-plain">
                        <div className="card-image">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <img
                              alt="..."
                              src={ia0010}
                            ></img>
                          </a>
                        </div>
                        <CardBody>
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <CardTitle tag="h4">Thom Sweeney</CardTitle>
                          </a>
                          <p className="card-description">
                            It's made from lightweight grey wool woven.
                          </p>
                          <CardFooter>
                            <div className="price-container">
                              <span className="price">€ 680</span>
                            </div>
                            <Button
                              className="btn-neutral btn-icon btn-round pull-right"
                              color="danger"
                              data-placement="left"
                              id="tooltip719224088"
                            >
                              {/* //אם רוצים להשתמש באיקון הזה צריך לקונות אותו */}
                              {/* <FontAwesomeIcon icon={['far', 'shopping-cart']}></FontAwesomeIcon> */}
                              <Link to="/"><img alt="...."
                                src={cart}></img></Link>
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              placement="left"
                              target="tooltip719224088"
                            >
                              To Cart
                                                        </UncontrolledTooltip>
                            <Button
                              className="btn-neutral btn-icon btn-round pull-right"
                              color="danger"
                              data-placement="left"
                              id="tooltip719224089"

                            >

                              <FontAwesomeIcon className="eye" icon={['far', 'eye']}></FontAwesomeIcon>

                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              placement="left"
                              target="tooltip719224089"
                            >
                              To View
                                                        </UncontrolledTooltip>

                          </CardFooter>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4" md="3">
                      <Card className="card-product card-plain">
                        <div className="card-image">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <img
                              alt="..."
                              src={ia0010}
                            ></img>
                          </a>
                        </div>
                        <CardBody>
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <CardTitle tag="h4">Kingsman</CardTitle>
                          </a>
                          <p className="card-description">
                            Crafted from khaki cotton and fully canvassed.
                          </p>
                          <CardFooter>
                            <div className="price-container">
                              <span className="price">€ 725</span>
                            </div>
                            <Button
                              className="btn-neutral btn-icon btn-round pull-right"
                              color="danger"
                              data-placement="left"
                              id="tooltip719224088"
                            >
                              {/* //אם רוצים להשתמש באיקון הזה צריך לקונות אותו */}
                              {/* <FontAwesomeIcon icon={['far', 'shopping-cart']}></FontAwesomeIcon> */}
                              <Link to="/"><img alt="...."
                                src={cart}></img></Link>
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              placement="left"
                              target="tooltip719224088"
                            >
                              To Cart
                                                        </UncontrolledTooltip>
                            <Button
                              className="btn-neutral btn-icon btn-round pull-right"
                              color="danger"
                              data-placement="left"
                              id="tooltip719224089"

                            >

                              <FontAwesomeIcon className="eye" icon={['far', 'eye']}></FontAwesomeIcon>

                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              placement="left"
                              target="tooltip719224089"
                            >
                              To View
                                                        </UncontrolledTooltip>

                          </CardFooter>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4" md="3">
                      <Card className="card-product card-plain">
                        <div className="card-image">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <img
                              alt="..."
                              src={boglioli}
                            ></img>
                          </a>
                        </div>
                        <CardBody>
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <CardTitle tag="h4">Boglioli</CardTitle>
                          </a>
                          <p className="card-description">
                            Masterfully crafted in Northern Italy.
                          </p>
                          <CardFooter>
                            <div className="price-container">
                              <span className="price">€ 699</span>
                            </div>
                            <Button
                              className="btn-neutral btn-icon btn-round pull-right"
                              color="danger"
                              data-placement="left"
                              id="tooltip719224088"
                            >
                              {/* //אם רוצים להשתמש באיקון הזה צריך לקונות אותו */}
                              {/* <FontAwesomeIcon icon={['far', 'shopping-cart']}></FontAwesomeIcon> */}
                              <Link to="/"><img alt="...."
                                src={cart}></img></Link>
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              placement="left"
                              target="tooltip719224088"
                            >
                              To Cart
                                                        </UncontrolledTooltip>
                            <Button
                              className="btn-neutral btn-icon btn-round pull-right"
                              color="danger"
                              data-placement="left"
                              id="tooltip719224089"

                            >

                              <FontAwesomeIcon className="eye" icon={['far', 'eye']}></FontAwesomeIcon>

                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              placement="left"
                              target="tooltip719224089"
                            >
                              To View
                                                        </UncontrolledTooltip>

                          </CardFooter>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col className="ml-auto mr-auto" md="3">
                      <Button
                        className="btn-round"
                        color="info"
                        id="tooltip51956639"
                      >
                        Load more...
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        target="tooltip51956639"
                      ></UncontrolledTooltip>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
          {/* <Container>
            <h2 className="section-title">News in fashion</h2>
          </Container>
          <div className="projects-4">
            <Container fluid>
              <Row>
                <Col className="px-0" md="6">
                  <Card
                    className="card-fashion card-background"
                    style={{
                      backgroundImage:
                        "url(" + bg35 + ")",
                    }}
                  >
                    <CardBody>
                      <CardTitle className="text-left" tag="div">
                        <h2>
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            The New York Times Todd Snyder and Raf Simons Party
                            During Men’s Fashion Week
                          </a>
                        </h2>
                      </CardTitle>
                      <CardFooter className="text-left">
                        <div className="stats">
                          <span>
                            <i className="now-ui-icons users_circle-08"></i>
                            Emy Grace
                          </span>
                          <span>
                            <i className="now-ui-icons tech_watch-time"></i>
                            June 6, 2020
                          </span>
                        </div>
                        <div className="stats-link pull-right">
                          <a
                            className="footer-link"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Fashion Week
                          </a>
                        </div>
                      </CardFooter>
                    </CardBody>
                  </Card>
                </Col>
                <Col className="px-0" md="6">
                  <div className="card-container">
                    <Card className="card-fashion">
                      <CardTitle tag="div">
                        <h4>
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            Valentina Garavani Holds a Summer Lunch in Honor of
                            Sofia Coppola...
                          </a>
                        </h4>
                      </CardTitle>
                      <CardBody>
                        <CardFooter className="text-left">
                          <div className="stats">
                            <span>
                              <i className="now-ui-icons users_circle-08"></i>
                              Jerry McGregor
                            </span>
                            <span>
                              <i className="now-ui-icons tech_watch-time"></i>
                              June 10, 2020
                            </span>
                          </div>
                        </CardFooter>
                      </CardBody>
                    </Card>
                    <Card
                      className="card-fashion card-background"
                      style={{
                        backgroundImage:
                          "url(" + bg40 + ")",
                      }}
                    ></Card>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="section"> */}
          {/* <Container>
              <h2 className="section-title">Latest Offers</h2>
              <Row>
                <Col md="4"> */}
          {/* <Card className="card-product card-plain">
                    <div className="card-image">
                      <img
                        alt="..."
                        className="img rounded"
                        src={saintLaurent1}
                      ></img>
                    </div>
                    <CardBody> */}
          {/* <CardTitle tag="h4">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Saint Laurent
                        </a>
                      </CardTitle> */}
          {/* <p className="card-description">
                        The structured shoulders and sleek detailing ensure a
                        sharp silhouette. Team it with a silk pocket square and
                        leather loafers.
                      </p> */}
          {/* <CardFooter>
                        <div className="price-container">
                          <span className="price price-old mr-1">€1,430</span>
                          <span className="price price-new">€743</span>
                        </div>
                        <div className="stats stats-right">
                          <Button
                            className="btn-icon"
                            color="neutral"
                            id="tooltip777725160"
                            type="button"
                          >
                            <i className="now-ui-icons ui-2_favourite-28"></i>
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip777725160"
                          >
                            Saved to Wishlist
                          </UncontrolledTooltip>
                        </div>
                      </CardFooter>
                    </CardBody>
                  </Card> */}
          {/* </Col>
          <Col md="4">
            <Card className="card-product card-plain">
              <div className="card-image">
                <img
                  alt="..."
                  className="img rounded"
                  src={saintLaurent}
                ></img>
              </div>
              <CardBody> */}
          {/* <CardTitle tag="h4">Saint Laurent</CardTitle> */}
          {/* <p className="card-description">
                        The structured shoulders and sleek detailing ensure a
                        sharp silhouette. Team it with a silk pocket square and
                        leather loafers.
                      </p> */}
          {/* <CardFooter>
                  <div className="price-container">
                    <span className="price price-old mr-1">€1,430</span>
                    <span className="price price-new">€743</span>
                  </div>
                  <div className="stats stats-right">
                    <Button
                      className="btn-icon"
                      color="neutral"
                      id="tooltip127778557"
                      type="button"
                    >
                      <i className="now-ui-icons ui-2_favourite-28"></i>
                    </Button>
                    <UncontrolledTooltip
                      delay={0}
                      target="tooltip127778557"
                    >
                  Saved to Wishlist
                          </UncontrolledTooltip>
                  </div>
                </CardFooter>
              </CardBody>
            </Card>
          </Col>
          <Col md="4"> */}
          {/* <Card className="card-product card-plain">
                    <div className="card-image">
                      <img
                        alt="..."
                        className="img rounded"
                        src={gucci}
                      ></img>
                    </div>
                    <CardBody>
                      <CardTitle tag="h4">Gucci</CardTitle>
                      <p className="card-description">
                        The smooth woven-wool is water resistant to ensure you
                        stay pristine after a long-haul flight. Cut in a trim
                        yet comfortable regular fit.
                      </p>
                      <CardFooter>
                        <div className="price-container">
                          <span className="price price-old mr-1">€2,430</span>
                          <span className="price price-new">€890</span>
                        </div>
                        <div className="stats stats-right">
                          <Button
                            className="btn-icon btn-neutral"
                            color="default"
                            id="tooltip221340378"
                            type="button"
                          >
                            <i className="now-ui-icons ui-2_favourite-28"></i>
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip221340378"
                          >
                            Add to Wishlist
                          </UncontrolledTooltip>
                        </div>
                      </CardFooter>
                    </CardBody>
                  </Card> */}
          {/* </Col>
              </Row>
            </Container> */}
          {/* </div> */}
        </div>
        <FooterOrange />
      </div >
    </>
  );
}

export default connect(
  (state) => {
    return {
      slideMin: state.filterReducer.minPrice,
      slideMax: state.filterReducer.maxPrice,
      products: state.productReducer.products,
      categories: state.categoriesReducer.categories
    }
  },
  (dispatch) => {
    return {
      filteredProducts: (p) => dispatch(actions.setFilteredItems(p)),
      setSliderMin: (x) => { dispatch(actions.setMinPrice(x)) },
      setSliderMax: (x) => { dispatch(actions.setMaxPrice(x)) },
      setFilteredItems: (x) => { dispatch(actions.setFilteredItems(x)) }
    }
  }
)(Ecommerce);



