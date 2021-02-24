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
                    {/* <FilteredProducts></FilteredProducts> */}
                  </div>
                </Col>
                <Col md="9">
                  <Row>
                    {/* הצגת המוצרים לפי הסינון לפי קטגוריות צבע וכו */}
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
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>

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
      categories: state.categoriesReducer.categories,
      filteredProducts: state.filterReducer.filteredItems
    }
  },
  (dispatch) => {
    return {
      filteredProducts: (p) => dispatch(actions.setFilteredItems(p)),
      setSliderMin: (x) => { dispatch(actions.setMinPrice(x)) },
      setSliderMax: (x) => { dispatch(actions.setMaxPrice(x)) },
    }
  }
)(Ecommerce);



