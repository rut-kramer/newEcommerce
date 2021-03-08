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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Switch, Route, Link } from "react-router-dom";


// core components
import ScrollTransparentNavbar from "../navbars/ScrollTransparentNavbar.js";
import EcommerceHeader from "../headers/EcommerceHeader.js";
import Footer from "../footers/footer.js";
import FilteredProducts from "./filteredProducts";

import { actions } from '../../redux/action';
import { connect } from 'react-redux';
import "./categoryBullcommerce.css"
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
function CategoryBullcommerce(props) {
  // const item = {
  //   SKU: "3456666"
  // }
  let pager2=[];
  React.useEffect(() => {

    document.body.classList.add("ecommerce-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    // callPager()
    let numPaper=(props.products.length/numOfPage);
    numPaper= Math.round(numPaper)+1+1
     pager2=new Array(numPaper)
    for (let index = 0; index < pager2.length; index++) 
    {
     pager2[index]=index;
      
    }
    return function cleanup() {
      document.body.classList.remove("ecommerce-page");
      document.body.classList.remove("sidebar-collapse");
    };

  }, []);

  const [arrPager, setArrPager] = useState([])
  const [p1, setP1] = useState(1)
  const [p2, setP2] = useState(1)
const numOfPage=12
function  callPager() 
{
  
  let numPaper=(props.products.length/numOfPage);
  numPaper= Math.round(numPaper)+1
  console.log(numPaper)
  // let arrPager2=new Array(numPaper)

  //  setArrPager({...arrPager2})
  for (let index = 0; index < numPaper; index++) 
  {
    setP1((index) * numOfPage);
    setP2((index+1) * numOfPage - 1);
   let list = props.products;
   list = list[0] ? list.slice(p1, p2) : [];
   console.log("list",index, list);
   
  //  arrPager[index]=list  
  setArrPager({
    ...arrPager,
      list
  })          
  } 
}
  
  const [degelBtn, setDegelBtn] = useState(1)
  function changePageNum(num)
   {
          let PageNum=degelBtn;

          if (num == "+")
                  PageNum++;
          else {
                  if (num == "-")
                          PageNum--;
                  else
                          PageNum = num;
          }
          setDegelBtn(PageNum)               
        }

  return (
    <>
    <button onClick={callPager}>call pager</button>
      <div className="wrapper">
        <EcommerceHeader />
        <div className="main">
          <div className="section">
            <Container>
            <Row className="mx-5 px-5">
                <Col md="12" className="row justify-content-between titleCategory">
                  <div className="section-title py-2">Active filters:  Clear all</div>
                  <div className="iconGridAndList py-2">
                    <FontAwesomeIcon className="mr-2" icon={['fas', 'th-large']}></FontAwesomeIcon>
                    <FontAwesomeIcon className="mr-2" icon={['fas', 'list']}></FontAwesomeIcon> Sort by:
                  </div>
                </Col>
                <Col md="3">
                  <div className="collapse-panel"
                    style={{ marginLeft: "-50px" }}
                  >
                    {/*קומפוננטת סינון המוצרים*/}
                    <FilteredProducts ></FilteredProducts>
                  </div>
                </Col>
                <Col md="9">
                  <Row>
                  
                  {/* {arrPager[degelBtn].map((item, index) => ( */}

                    {props.products.map((item, index) => (
                      <Col lg="4" md="6" sm="12" key={index}>
                        <Card className="card-product card-plain">
                          <div className="card-image frameToProductView">
                            <Link to={{ pathname: "/" + props.objectFields.urlRoute + "/product/" + item.SKU, state: { product: item } }}>
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
                                    "product": {
                                      "amount": 4,
                                      "price": 450,
                                      "images": [],
                                      "attributes": [
                                        "6021297fb7ce77e4d5b3e8cf"
                                      ],
                                      "featured": false,
                                      "_id": "602babe3c8336e62cd3d5f2e",
                                      "name": "Simcha dress",
                                      "description": "to wedding",
                                      "SKU": "7786754614",
                                      "category": "601bec7cbf7ea1c3829cd18b",
                                      "store": "6012b0300718f71a8fa25df5",
                                    },
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
                    < Col md="12">
                      <Row className="pagerCategory">
                        <Col md="6"><div className="pt-3">{p1}-{p2} of {props.products.length} Results</div>
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
                                onClick={() => { changePageNum('-') }}
                              >
                                <span aria-hidden={true}>
                                  <i
                                    aria-hidden={true}
                                    className="fa fa-angle-double-left"
                                  ></i>
                                </span>
                              </PaginationLink>
                            </PaginationItem>


                             {pager2.map((item, index) => ( 
                            <PaginationItem
                             className={degelBtn == index ? "active" : ""}
                            >
                              <PaginationLink
                                href="#pablo"
                                onClick={(e) => {e.preventDefault();changePageNum(index)}}
                              >
                                {item}
                        </PaginationLink>
                            </PaginationItem>
                    ))}  

                            {/* <PaginationItem
                             className={degelBtn == 2 ? "active" : ""}
                            >
                              <PaginationLink
                                href="#pablo"
                                onClick={(e) => {e.preventDefault();changePageNum(2)}}
                              >
                                2
                        </PaginationLink>
                            </PaginationItem>
                            <PaginationItem
                              className={degelBtn == 3 ? "active" : ""}
                            >
                              <PaginationLink
                                href="#pablo"
                                onClick={(e) => {e.preventDefault();changePageNum(3)}}
                              >
                                3
                        </PaginationLink>
                            </PaginationItem>*/}
                            <PaginationItem 
                            
                            >
                              <PaginationLink
                                aria-label="Next"
                                href="#pablo"
                                onClick={(e) => {changePageNum('+')}}

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
      products: state.productReducer.products,
      categories: state.categoriesReducer.categories,
      filteredProducts: state.filterReducer.filteredItems,
      objectFields: state.storeReducer.objectFields
    }
  },
  (dispatch) => {
    return {
      filteredProducts: (p) => dispatch(actions.setFilteredItems(p)),
      setSliderMin: (x) => { dispatch(actions.setMinPrice(x)) },
      setSliderMax: (x) => { dispatch(actions.setMaxPrice(x)) },
      addToCart: (product) => { dispatch(actions.addToCart(product)) }

    }
  }
)(CategoryBullcommerce);



