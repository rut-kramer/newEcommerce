import React from "react";
import sofa from "../../../assets/img/xd/ia_300000012.png";
import sofaSide from "../../../assets/img/xd/ia_300000013.png";
import sofaBack from "../../../assets/img/xd/ia_300000015.png";
import sofaD from "../../../assets/img/xd/ia_300001615.png";
import sofa1 from "../../../assets/img/xd/631e3939-9988-41b6-a6fe-d60206ab0582@2x.png";
import sofa2 from "../../../assets/img/xd/3157828-so-squ-1@2x.png";
import sofa3 from "../../../assets/img/xd/82878238-21e4-40e4-8f8e-61135d18f3ab@2x.png";
import sofa4 from "../../../assets/img/xd/e08c0b39-248f-4021-9c8d-1adc2b1bf887@2x.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



import './product.css'

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
// import ScrollTransparentNavbar from "./scrollTransparentNavbar";
// import ProductPageHeader from "./productPageHeader";
import pp1 from "../../../assets/img/pp-1.jpg";
import pp2 from "../../../assets/img/pp-2.jpg";
import pp3 from "../../../assets/img/pp-3.jpg";
import pp4 from "../../../assets/img/pp-4.jpg";
import wooyoungmi from "../../../assets/img/wooyoungmi.jpg"
import saintLaurent from "../../../assets/img/saint-laurent.jpg"
import saintLaurent1 from "../../../assets/img/saint-laurent1.jpg"
import gucci from "../../../assets/img/gucci.jpg"

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

function Product() {
    // carousel states and functions
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
    // collapse states and functions
    const [collapses, setCollapses] = React.useState([1]);
    const changeCollapse = (collapse) => {
        if (collapses.includes(collapse)) {
            setCollapses(collapses.filter((prop) => prop !== collapse));
        } else {
            setCollapses([...collapses, collapse]);
        }
    };
    // select states and functions
    const [colorSelect, setColorSelect] = React.useState(null);
    const [sizeSelect, setSizeSelect] = React.useState(null);
    React.useEffect(() => {
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
                                    style={{ height: "100%", margin: 0 + " !important" }}

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
                            <Col md="6" sm="12" id="titleAndContent" >
                                <h4>
                                    <b>
                                        A two-seater sofa in a modern design upholstered
                                        in a velvec fubric on the Quito-mustard model
                                                                        </b>
                                </h4>
                                <p style={{ fontSize: "18px" }}>
                                    Lorem Ipsum dolor sit amet, consectetur sadipscing elit, sed
                                    diam nonumy eirmod tempor invidunt ut labore et dolore
                                    magna aliquy erat, sed diam nonumy eirmod, At vero eos et.
                        </p>
                                <div className="d productColors">
                                    <h4><b>Color:</b></h4>
                                    <div>
                                        <div className="color" style={{ backgroundColor: "#DCC158" }}></div>
                                        <div className="color" style={{ backgroundColor: "#707070" }}></div>
                                        <div className="color" style={{ backgroundColor: "black" }}></div>
                                        <div className="color" style={{ backgroundColor: "white", border: "1px solid #707070" }}></div>
                                        <div className="color" ></div>
                                    </div>
                                </div>
                                <div className="d productPrice">
                                    <h4><b>Price:</b></h4>
                                    <span><del>290$</del></span>
                                    <span>250$</span>
                                </div>
                                <div className="d">
                                    <h4><b>Quantity:</b></h4>
                                    <div>
                                        <Button size="sm">
                                            <FontAwesomeIcon icon={['fas', 'plus']}>
                                            </FontAwesomeIcon>
                                        </Button>{' '}
                                        {1}{' '}
                                        <Button size="sm">
                                            <FontAwesomeIcon icon={['fas', 'minus']}>
                                            </FontAwesomeIcon>
                                        </Button>
                                        <Button className="addToCart" outline size="sm">
                                            <FontAwesomeIcon icon={['fas', 'shopping-cart']}>
                                            </FontAwesomeIcon>
                        Add to cart
                        </Button>{' '}
                                    </div>
                                </div>
                                <div className="d">
                                    <b>
                                        Dimantions
                                                                        </b>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="section" id="moreDetails">
                        <h3><b>DIMANTIONS</b></h3>
                        <Row>
                            <Col md={5}>
                                <Table borderless>
                                    <tr>
                                        <th>Height(cm)</th>
                                        <td>80</td>
                                    </tr>
                                    <tr>
                                        <th>Widht(cm)</th>
                                        <td>198</td>
                                    </tr>
                                    <tr>
                                        <th>Depth(cm)</th>
                                        <td>96</td>
                                    </tr>
                                    <tr>
                                        <th>Height(cm)</th>
                                        <td>80</td>
                                    </tr>
                                    <tr>
                                        <th>Widht(cm)</th>
                                        <td>198</td>
                                    </tr>
                                    <tr>
                                        <th>Depth(cm)</th>
                                        <td>96</td>
                                    </tr>
                                    <tr>
                                        <th>Height(cm)</th>
                                        <td>80</td>
                                    </tr>
                                </Table>
                            </Col>
                            <Col md={7}>
                                <img src={sofaD} alt="sofaD" />
                            </Col>
                        </Row>
                    </div>
                    <div className="section">
                        <div id="titleSimilar">
                            <h3><b>Similar Products</b></h3>
                            <h4>Lorem ipsum dolor sit amet, consectetur sadipscing</h4>
                            <div className="arrows">
                                <FontAwesomeIcon icon={['fas', 'long-arrow-alt-left']}>
                                </FontAwesomeIcon>{" "}|{" "}
                                <FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']}>
                                </FontAwesomeIcon>
                            </div>
                            <Row>
                                <Col lg={3} md={2} sm={12} >
                                    <Card className="card-product card-plain">
                                        <div className="card-image" className="similarImg">
                                            <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                <img
                                                    alt="..."
                                                    src={sofa1}
                                                ></img>
                                            </a>
                                        </div>
                                        <CardBody>
                                            <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                <CardTitle tag="h5">Patio arm chair</CardTitle>
                                            </a>
                                            <CardFooter>
                                                <div className="price-container">
                                                    <span className="price">$ 150</span>
                                                </div>
                                            </CardFooter>
                                        </CardBody>
                                    </Card>

                                    {/* <div className="similarImg">
                                                                                <img src={sofa1} alt="sofa1" />
                                                                        </div> */}
                                </Col>
                                <Col lg={3} md={2} sm={12} >
                                    <Card className="card-product card-plain">
                                        <div className="card-image" className="similarImg">
                                            <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                <img
                                                    alt="..."
                                                    src={sofa2}
                                                ></img>
                                            </a>
                                        </div>
                                        <CardBody>
                                            <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                <CardTitle tag="h5">Patio arm chair</CardTitle>
                                            </a>
                                            <CardFooter>
                                                <div className="price-container">
                                                    <span className="price">$ 150</span>
                                                </div>
                                            </CardFooter>
                                        </CardBody>
                                    </Card>

                                </Col>
                                <Col lg={3} md={2} sm={12} >
                                    <Card className="card-product card-plain">
                                        <div className="card-image" className="similarImg">
                                            <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                <img
                                                    alt="..."
                                                    src={sofa3}
                                                ></img>
                                            </a>
                                        </div>
                                        <CardBody>
                                            <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                <CardTitle tag="h5">Patio arm chair</CardTitle>
                                            </a>
                                            <CardFooter>
                                                <div className="price-container">
                                                    <span className="price">$ 150</span>
                                                </div>
                                            </CardFooter>
                                        </CardBody>
                                    </Card>

                                </Col>
                                <Col lg={3} md={2} sm={12}>
                                    <Card className="card-product card-plain">
                                        <div className="card-image" className="similarImg">
                                            <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                <img
                                                    alt="..."
                                                    src={sofa4}
                                                ></img>
                                            </a>
                                        </div>
                                        <CardBody>
                                            <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                <CardTitle tag="h5">Patio arm chair</CardTitle>
                                            </a>
                                            <CardFooter>
                                                <div className="price-container">
                                                    <span className="price">$ 150</span>
                                                </div>
                                            </CardFooter>
                                        </CardBody>
                                    </Card>

                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Product;
