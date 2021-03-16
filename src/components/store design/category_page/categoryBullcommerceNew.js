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
  // Carousel,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Switch, Route, Link } from "react-router-dom";
 import Carousel from 'react-elastic-carousel'
 
// core components
import EcommerceHeader from "../../headers/EcommerceHeader.js";
import FilteredProducts from "../filteredProducts";

import { actions } from '../../../redux/action';
import { connect } from 'react-redux';
import "./categoryBullcommerce.css"



//images

//xd image
import ia006 from "../../../assets/img/xd/ia_300000006.png";
import cart from "../../../assets/img/xd/cart.svg"
function CategoryBullcommerce(props) {
  // const item = {
  //   SKU: "3456666"
  // }
  let pager2=[];
  React.useEffect(() => {

    console.log("ssttrree", props.objectFields);
    document.body.classList.add("ecommerce-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
     callPager()
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
  
  const numOfPage=3
  const [arrPager, setArrPager] = useState([])
  let arrTemp=[]
  const [pa1, setP1] = useState(1)
  const [pa2, setP2] = useState(numOfPage)
  let p1=1
  let p2=2


function  callPager() 
{
  let numPaper=(props.products.length/numOfPage);
  numPaper= Math.ceil(numPaper)
  for (let index = 0; index < numPaper; index++) 
  {
    let objec={
      index:"",
      list:""
    }
    p1=((index) * numOfPage);
    p2=((index+1) * numOfPage);
   let list = props.filteredProducts;
   list = list[0] ? list.slice(p1, p2) : [];
   console.log("list",index, list);
   objec.index=index+1;
   objec.list=list
   arrTemp.push(objec)
  }
  setArrPager(
    a => arrTemp
  )          
  } 
  const [degelBtn, setDegelBtn] = useState(0)
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
          setP1(((PageNum) * numOfPage)+1)
          setP2((PageNum+1) * numOfPage)             
        }

  return (
    <>
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
                  {arrPager[degelBtn]&&arrPager[degelBtn].list.map((item, index) => (

                    // {console.log("condition", (Array.isArray(props.filteredProducts) &&
                    //   props.filteredProducts.length > 0))}
                    // {(Array.isArray(props.filteredProducts) &&
                    //   props.filteredProducts.length > 0) &&
                    //   props.filteredProducts.map((item, index) => (

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
                    < Col md="12">
                      <Row className="pagerCategory">
                        <Col md="6"><div className="pt-3">{pa1}-{pa2} of {props.products.length} Results</div>
                        </Col>
                        <Col md="6">
{/*                         
                        <Pagination
                            className="pagination pagination-info justify-content-end pt-2"
                            listClassName="pagination-info justify-content-center"
                          > */}
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
                             <div className="Apprs"> 
 <Carousel  itemsToShow={1}>
                             {arrPager&&arrPager.map((item, index) => ( 
                      <item key={index}> 
                        <PaginationItem
                             className={degelBtn == index ? "active" : ""}
                            >
                              <PaginationLink
                                href="#pablo"
                                onClick={(e) => {e.preventDefault();changePageNum(index)}}
                              >
                                {item.index}
                        </PaginationLink>
                            </PaginationItem>
                            </item>
                  ))}  
</Carousel>
</div>
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
                          {/* </Pagination> */}
                          
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
      products: state.productReducer.products,
      categories: state.categoriesReducer.categories,
      filteredProducts: state.filterReducer.filteredItems,
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



