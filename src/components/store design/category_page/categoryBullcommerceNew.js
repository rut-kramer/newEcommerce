/*eslint-disable*/
import React, { useState } from "react";
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
  CardImg,
  Collapse,
  Label,
  FormGroup,
  Input,
  Container,
  Pagination,
  PaginationItem,
  PaginationLink,

  InputGroupAddon,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
// import Card from 'react-bootstrap/Card'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Switch, Route, Link } from "react-router-dom";


// core components
import EcommerceHeader from "../../headers/EcommerceHeader.js";
import FilteredProducts from "../filteredProducts";

import { actions } from '../../../redux/action';
import { connect } from 'react-redux';
import "./categoryBullcommerce.css"
//xd image
import ia006 from "../../../assets/img/xd/ia_300000006.png";
import cart from "../../../assets/img/xd/cart.svg";

import { Alert } from 'reactstrap';
import "../../alerts/alert.css";

function CategoryBullcommerce(props) {
  // const item = {
  //   SKU: "3456666"
  // }


  const [alerts, setAlerts] = useState([]);
  const [filterObject, setFilterObject] = React.useState({
    categories: [],
    attributes: []
  });

  const [visible, setVisible] = useState(true);

  const onDismiss = (alert) => {
    setVisible(false);
    let a;
    a = alerts;
    let index = alerts.indexOf(alert);
    if (index > -1)
      a.splice(index, 1);
    setAlerts(a);
  };



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

  const onFilter = (min, max) => {

    // props.setFObject(x);

    console.log("xxx", filterObject);

    let filteredProducts = [];
    //filter by attributes
    if (Array.isArray(filterObject.attributes) && filterObject.attributes.length > 0)
      filterObject.attributes.forEach(a => {
        props.storeProducts.forEach(pr => {
          let pa;
          if (Array.isArray(pr.attributes) && pr.attributes.length > 0)
            pa = pr.attributes.find(at => at.attribute._id.toString() === a.attribute._id.toString());
          if (pa) {
            let terms = pa.terms.find(t => t._id.toString() === a.term._id.toString());
            if (terms && !filteredProducts.includes(pr)) { filteredProducts.push(pr); }
          }
        })
      });
    else filteredProducts = props.storeProducts;
    //filter the filtered array by categories
    let filterByCategories = [];
    debugger
    if (Array.isArray(filterObject.categories) && filterObject.categories.length > 0) {
      filterObject.categories.forEach(c => {
        filteredProducts.filter(p => {
          if (p.category.toString() === c._id.toString())
            return p;
        }).forEach(x => {
          filterByCategories.push(x)
        })
      })
      filteredProducts = filterByCategories;
    }
    //filter the filtered array by price
    let filterProductsByPrice;
    filterProductsByPrice = filteredProducts.filter((p) => {
      if (p.price >= min && p.price <= max)
        return p;
    });
    // if (Array.isArray(filterProductsByPrice) && filterProductsByPrice.length > 0)
    filteredProducts = filterProductsByPrice;
    props.setFilteredProducts(filteredProducts);
  }

  const addTermToFilterObject = (attribute, term, ifCheck) => {
    if (ifCheck) {
      let a = filterObject.attributes;
      a.push({
        "attribute": attribute,
        "term": term
      })
      let ctgr = filterObject.categories;
      setFilterObject({ attributes: a, categories: ctgr });
      let tempAlerts = alerts;
      tempAlerts.push(term.name);
      setAlerts(tempAlerts);
      console.log("a", alerts);

      // props.setAttributesFilterObject(a);

    }
    else {
      let a = filterObject.attributes;
      a.splice(a.findIndex(v => v.term._d === term._d), 1);

      // const index = a.indexOf({ "attribute": attribute, "term": term });
      // if (index > -1)
      //         a.splice(index, 1);
      let ctgr = filterObject.categories;
      setFilterObject({ attributes: a, categories: ctgr });

      let tempAlerts = alerts;
      tempAlerts.splice(tempAlerts.findIndex(v => v === term.name), 1);

      setAlerts(tempAlerts);
      console.log("a", alerts);

      // props.setAttributesFilterObject(a);
    }
    onFilter(props.slideMin, props.slideMax)
  }

  const addCategoryToFilterObject = (category, ifCheck) => {
    if (ifCheck) {
      let c = filterObject.categories;
      c.push(category);
      let attrb = filterObject.attributes;
      setFilterObject({ attributes: attrb, categories: c });

      let tempAlerts = alerts;
      tempAlerts.push(category.categoryName);
      setAlerts(tempAlerts);
      console.log("a", alerts);
      // props.setCategoriesFilterObject(c);
    }
    else {
      let c = filterObject.categories;
      const index = c.indexOf(category);
      if (index > -1)
        c.splice(index, 1);
      let attrb = filterObject.attributes;
      setFilterObject({ attributes: attrb, categories: c });

      let tempAlerts = alerts;
      tempAlerts.splice(tempAlerts.findIndex(v => v === category.categoryName), 1);

      setAlerts(tempAlerts);
      console.log("a", alerts);

      // props.setCategoriesFilterObject(c);
    }
    onFilter(props.slideMin, props.slideMax);
  }


  const sortProducts = (value) => {
    let sortP = props.filterProducts;
    switch (value) {
      case "Price: from high to low":
        let bb = sortP.slice().sort((a, b) => {

          let x = a["price"];
          let y = b["price"];

          if (x < y) { return -1; }
          if (x > y) { return 1; }
          return 0

          // return a[columnName].localeCompare(b[columnName])
        });
        sortP = bb.reverse();

        break;
      case "Price: from low to high":
        let bb2 = sortP.slice().sort((a, b) => {
          let x = a["price"];
          let y = b["price"];

          if (x < y) { return -1; }
          if (x > y) { return 1; }
          return 0

          // return a[columnName].localeCompare(b[columnName])
        });
        sortP = bb2;
        break;
      case "A B C":
        let bb3 = sortP.slice().sort((a, b) => {
          let x = String(a["name"]).toLowerCase();
          let y = String(b["name"]).toLowerCase();;

          if (x < y) { return -1; }
          if (x > y) { return 1; }
          return 0

          // return a[columnName].localeCompare(b[columnName])
        });
        sortP = bb3;
        break;

      default: sortP = props.filterProducts;
        break;
    }
    props.setFilteredProducts(sortP);
  }

  return (
    <>
      <div className="wrapper">
        <EcommerceHeader />
        <div className="main">
          <div className="section">
            <Container>
              <Row className="mx-5 px-5">
                <Col md="12" className="d-flex justify-content-between titleCategory">
                  <div className="section-title d-flex justify-content-between py-2">
                    <span style={{ float: "left" }} className="mr-2">Active filters:</span>
                    <div>
                      {alerts.map((item, index) => (
                        <Alert key={index} className="alert__bullcommerce mr-2 mb-0 pb-0 pt-0 d-flex justify-content-center" color="#F5F5F5" isOpen={visible} toggle={() => onDismiss(item)}>
                          {item}
                        </Alert>
                      ))}
                    </div>
                    <span>Clear all</span></div>
                  {/* <div className="iconGridAndList py-2">
    <FontAwesomeIcon className="mr-2" icon={['fas', 'th-large']}></FontAwesomeIcon>
    <FontAwesomeIcon className="mr-2" icon={['fas', 'list']}></FontAwesomeIcon> Sort by:
  </div> */}
                  <div>
                    <form>
                      <label htmlFor="sort">Sort by:</label>
                      <select
                        onChange={e => sortProducts(e.target.value)}
                        style={{ border: 0 }}>
                        <option value="Default">Default</option>
                        <option value="Price: from low to high">Price: from low to high</option>
                        <option value="Price: from high to low">Price: from high to low</option>
                        <option value="A B C">A B C</option>
                      </select>
                    </form>

                  </div>
                </Col>
                <Col md="3">
                  <div className="collapse-panel"
                  // style={{ marginLeft: "-50px" }}
                  >
                    {/*קומפוננטת סינון המוצרים*/}
                    <FilteredProducts onFilter={onFilter} addCategoryToFilterObject={addCategoryToFilterObject} addTermToFilterObject={addTermToFilterObject} ></FilteredProducts>
                  </div>
                </Col>
                <Col md="9" className="pr-0">
                  <Row>
                    {console.log("condition", (Array.isArray(props.filterProducts) &&
                      props.filterProducts.length > 0))}
                    {(Array.isArray(props.filterProducts) &&
                      props.filterProducts.length > 0) &&
                      props.filterProducts.map((item, index) => (

                        <Col lg="4" md="6" sm="12" key={index}>

                          <Card className="card-product card-plain">
                            <div className="card-image frameToProductView">
                              <Link to={{ pathname: "/" + props.objectFields.storeName + "/product/" + item.SKU, state: { product: item } }}>
                                <img className="imageProduct"
                                  alt="..."
                                  src={ia006}
                                ></img>
                              </Link>
                            </div>
                            <CardBody>
                              <CardTitle className="card-title" tag="h4">{item.name}</CardTitle>
                              <p className="card-description">
                                {item.description}
                              </p>
                              <CardFooter>
                                <div className="price-container">
                                  <span className="price">$ {item.price}</span>
                                </div>
                                <Button
                                  className="btn-neutral btn-icon btn-round pull-right"
                                  color="danger"
                                  data-placement="left"
                                  id="tooltip719224088"
                                  onClick={() => props.addToCart(
                                    {
                                      "product": item,
                                      "amount": 1
                                    }
                                  )}

                                >
                                  {/* //אם רוצים להשתמש באיקון הזה צריך לקונות אותו */}
                                  <FontAwesomeIcon icon={['far', 'shopping-cart']}></FontAwesomeIcon>
                                  <img alt="...."
                                    src={cart}></img>
                                </Button>
                                <UncontrolledTooltip
                                  delay={0}
                                  placement="left"
                                  target="tooltip719224088"
                                >
                                  Add To Cart
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
                      ))
                    }
                    {(Array.isArray(props.filterProducts) && props.filterProducts.length > 12) &&
                      < Col md="12">
                        <Row className="pagerCategory">
                          <Col md="6" style={{ padding: 0 }}><div className="pt-3">1-48 of 323 Results</div>
                          </Col>
                          <Col md="6">
                            <Pagination
                              className="pagination pagination-info justify-content-end pt-2"
                              listClassName="pagination-info justify-content-center"
                            >
                              <PaginationItem>
                                <PaginationLink
                                  aria-label="Previous"
                                  href="#pablo"
                                  onClick={(e) => e.preventDefault()}
                                >
                                  <span aria-hidden={true}>
                                    <i
                                      aria-hidden={true}
                                      className="fa fa-angle-double-left"
                                    ></i>
                                  </span>
                                </PaginationLink>
                              </PaginationItem>
                              <PaginationItem>
                                <PaginationLink
                                  href="#pablo"
                                  onClick={(e) => e.preventDefault()}
                                >
                                  1
        </PaginationLink>
                              </PaginationItem>
                              <PaginationItem className="active">
                                <PaginationLink
                                  href="#pablo"
                                  onClick={(e) => e.preventDefault()}
                                >
                                  2
        </PaginationLink>
                              </PaginationItem>
                              <PaginationItem>
                                <PaginationLink
                                  href="#pablo"
                                  onClick={(e) => e.preventDefault()}
                                >
                                  3
        </PaginationLink>
                              </PaginationItem>
                              <PaginationItem>
                                <PaginationLink
                                  aria-label="Next"
                                  href="#pablo"
                                  onClick={(e) => e.preventDefault()}
                                >
                                  <span aria-hidden={true}>
                                    <i
                                      aria-hidden={true}
                                      className="fa fa-angle-double-right"
                                    ></i>
                                  </span>
                                </PaginationLink>
                              </PaginationItem>
                            </Pagination>

                          </Col>

                        </Row>



                      </Col>
                    }
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>

        </div>
      </div >
    </>
  );
}

export default connect(
  (state) => {
    return {
      slideMin: state.filterReducer.minPrice,
      slideMax: state.filterReducer.maxPrice,
      storeProducts: state.productReducer.products,
      categories: state.categoriesReducer.categories,
      filterProducts: state.filterReducer.filteredItems,
      objectFields: state.storeReducer.objectFields

    }
  },
  (dispatch) => {
    return {
      // setFilteredProducts: (p) => dispatch(actions.setFilteredItems(p)),
      // setSliderMin: (x) => { dispatch(actions.setMinPrice(x)) },
      // setSliderMax: (x) => { dispatch(actions.setMaxPrice(x)) },
      setFilteredProducts: (p) => dispatch(actions.setFilteredItems(p)),
      addToCart: (product) => { dispatch(actions.addToCart(product)) }

    }
  }
)(CategoryBullcommerce);



