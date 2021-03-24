import React, { useState, useEffect } from "react";
import sofa from "../../../assets/img/ia_300000012.png";
import sofaSide from "../../../assets/img/ia_300000013.png";
import sofaBack from "../../../assets/img/ia_300000015.png";
import sofaD from "../../../assets/img/ia_300001615.png";
import sofa1 from "../../../assets/img/631e3939-9988-41b6-a6fe-d60206ab0582.png";
import sofa2 from "../../../assets/img/3157828-so-squ-1.png";
import sofa3 from "../../../assets/img/82878238-21e4-40e4-8f8e-61135d18f3ab@2x.png";
import sofa4 from "../../../assets/img/e08c0b39-248f-4021-9c8d-1adc2b1bf887@2x.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Select from "react-select"
import '../../store design/product_page/product.css'
import { actions } from '../../../redux/action';
import { connect } from 'react-redux';

// reactstrap components
import {
        Button,
        Card,
        CardHeader,
        CardBody,
        CardFooter,
        CardLink,
        CardTitle,
        Collapse,
        Container,
        Row,
        Col,
        UncontrolledTooltip,
        Carousel,
        CarouselItem,
        CarouselIndicators,
        Table
} from "reactstrap";

// core components
import ScrollTransparentNavbar from "../../navbars/ScrollTransparentNavbar";

const items = [
        {
                src: sofa,
                altText: "sofa",
                caption: "",
        },
        {
                src: sofaSide,
                altText: "sofa side",
                caption: "",
        },
        {
                src: sofaBack,
                altText: "sofa back",
                caption: "",
        },
];

function ProductEdit(props) {

        const update = (event) => {
                var u;
                if (event.target.name === "featured" || event.target.name === "isStock" || event.target.name === "isDraft")

                        u = event.target.checked;
                else
                        u = event.target.value
                props.setCurrentProduct({
                        ...props.currentProduct,
                        [event.target.name]: u
                });
        }

        const updateCategory = (event) => {
                let k = props.categoryList.filter(p => p.categoryName == event.target.value)
                props.setCurrentProduct({
                        ...props.currentProduct,
                        category: k[0]._id
                });
        }

        const Submit = () => {
                props.editproduct(props.currentProduct);
        }

        // carousel states and functions
        const [activeIndex, setActiveIndex] = useState(0);
        const [animating, setAnimating] = useState(false);


        const [orderAmount, setOrderAmount] = useState(1)

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
        // collapse states and functions
        const [collapses, setCollapses] = useState([1]);
        const changeCollapse = (collapse) => {
                if (collapses.includes(collapse)) {
                        setCollapses(collapses.filter((prop) => prop !== collapse));
                } else {
                        setCollapses([...collapses, collapse]);
                }
        };
        // select states and functions
        const [colorSelect, setColorSelect] = useState(null);
        const [sizeSelect, setSizeSelect] = useState(null);

        useEffect(() => {
                document.body.classList.add("product-page");
                document.body.classList.add("sidebar-collapse");
                document.documentElement.classList.remove("nav-open");
                window.scrollTo(0, 0);
                document.body.scrollTop = 0;
                return function cleanup() {
                        document.body.classList.remove("product-page");
                        document.body.classList.remove("sidebar-collapse");
                };
        }, []);
        return (
                <>
                        <h1>Edit Product</h1>
                        {/* <Container className="p-0">
                                <Row>
                                        <Col sm="12" md={{ size: 10, offset: 1 }}> */}
                        <div className="wrapper">
                                <div className="main">
                                        <div className="section" id="productDetails">
                                                <Row>
                                                        <Col id="productImage" md="6" sm="12">
                                                                <Carousel
                                                                        activeIndex={activeIndex}
                                                                        next={next}
                                                                        previous={previous}
                                                                        margin={0}
                                                                        style={{ height: "100%", marginTop: 0 + "px !important" }}

                                                                >
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
                                                                                                <input className="form__file" type="file" />
                                                                                                <img
                                                                                                        src={item.src}
                                                                                                        alt={item.altText}
                                                                                                        className="d-block img-raised"
                                                                                                />
                                                                                        </CarouselItem>
                                                                                );
                                                                        })}
                                                                        <a
                                                                                className="carousel-control-prev"
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
                                                                                        backgroundColor="transparent"
                                                                                >
                                                                                        <FontAwesomeIcon icon={['fas', 'chevron-left']}>
                                                                                        </FontAwesomeIcon>
                                                                                </Button>
                                                                        </a>
                                                                        <a
                                                                                className="carousel-control-next"
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
                                                                                        backgroundColor="transparent"
                                                                                >
                                                                                        <FontAwesomeIcon icon={['fas', 'chevron-right']}>
                                                                                        </FontAwesomeIcon>                                                                                </Button>
                                                                        </a>
                                                                </Carousel>

                                                        </Col>
                                                        {props.currentProduct && <Col md="6" sm="12" id="titleAndContent" >
                                                                <p style={{ fontSize: "18px" }}>

                                                                        <input className="field__input" type="text" onChange={update} value={props.currentProduct.name} name="name" placeholder="name" />
                                                                        <input className="field__input" type="text" placeholder="description" name="description" id="description-in" onChange={update} value={props.currentProduct.description} />
                                                                        <input className="field__input" type="text" name="SKU" id="sku-in" onChange={update} value={props.currentProduct.SKU} placeholder="SKU" />
                                                                        <input className="field__input" type="number" placeholder="amount" name="amount" id="amount-in" onChange={update} value={props.currentProduct.amount} />
                                                                        <input className="field__input" type="text" placeholder="price" name="price" id="price-in" onChange={update} value={props.currentProduct.price} />
                                                                        <input className="field__input" type="text" onChange={update} name="salePrice" placeholder="salePrice" value={props.currentProduct.salePrice} />
                                                                        <input className="field__input" type="text" placeholder="weight" name="weight" id="description-in" onChange={update} value={props.currentProduct.weight} />
                                                                        <input type="checkbox" onClick={update} checked={props.currentProduct.isDraft} name="isDraft"></input>isDraft<br></br>
                                                                        <input type="checkbox" onClick={update} checked={props.currentProduct.isStock} name="isStock"></input>isStock<br></br>
                                                                        <input type="checkbox" onClick={update} checked={props.currentProduct.featured} name="featured"></input>featured<br></br>
                                                                        <label className="field__input" for="video" >video</label>
                                                                        <input id="video" className="field__input" type="file" onClick={update} name="video" value={props.currentProduct.video} />
                                                                        <label className="field__input" for="photoGallery">photoGallery</label>
                                                                        <input id="photoGallery" type="file" onClick={update} name="photoGallery" value={props.currentProduct.photoGallery} />

                                                                </p>
                                                                <select onChange={updateCategory} name="category" className="field__select" >
                                                                        <option>בחר קטגוריה </option>
                                                                        {props.categoryList.map((item, index) => (
                                                                                <option>{item.categoryName}</option>
                                                                        ))}

                                                                </select>
                                                                {(Array.isArray(props.currentProduct.attributes) &&
                                                                        props.currentProduct.attributes.length) ?
                                                                        props.currentProduct.attributes.map((item, index) => (

                                                                                item.attribute && <div key={index} className=" productColors">
                                                                                        <h4><b>{item.attribute.name}:</b></h4>
                                                                                        <div>
                                                                                                {item.attribute.name === "Color" ?
                                                                                                        <>
                                                                                                                {item.terms.map((term, index) => (
                                                                                                                        <div key={index} className="color" style={{ backgroundColor: term.name }}></div>
                                                                                                                ))}
                                                                                                        </> :
                                                                                                        <>
                                                                                                                {item.terms.map((term, index) => (
                                                                                                                        <label key={index} >{index != 0 && ','} {term.name} </label>
                                                                                                                ))}
                                                                                                        </>
                                                                                                }
                                                                                        </div>
                                                                                </div>

                                                                        ))
                                                                        : <></>}
                                                                <Button className="addToCart" outline size="sm" onClick={Submit}>
                                                                        <FontAwesomeIcon icon={['fas', 'edit']}>
                                                                        </FontAwesomeIcon>
                                                                        Edit the product
                                                                </Button>
                                                        </Col>}
                                                </Row>
                                        </div>
                                </div>
                        </div>
                </>
        );
}

export default connect(
        (state) => {
                return {

                        categoryList: state.categoriesReducer.categories,
                        currentProduct: state.productReducer.currentProduct


                }
        },
        (dispatch) => {
                return {
                        editproduct: (v) => dispatch(actions.editProduct(v)),
                        setCurrentProduct: (e) => dispatch(actions.setCurrentProduct(e))
                }
        }
)(ProductEdit);



