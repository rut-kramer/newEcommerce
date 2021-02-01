import React from "react";
// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";

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
} from "reactstrap";

// core components
import ScrollTransparentNavbar from "./scrollTransparentNavbar";
import ProductPageHeader from "./productPageHeader";
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
        src: pp1,
        altText: "",
        caption: "",
    },
    {
        src: pp2,
        altText: "",
        caption: "",
    },
    {
        src: pp3,
        altText: "",
        caption: "",
    },
    {
        src: pp4,
        altText: "",
        caption: "",
    },
];

function ProductPage() {
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
            <ScrollTransparentNavbar />
            <div className="wrapper">
                <ProductPageHeader />
                <div className="section">
                    <Container>
                        <Row>
                            <Col md="5">
                                <Carousel
                                    activeIndex={activeIndex}
                                    next={next}
                                    previous={previous}
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
                                            color="info"
                                            name="button"
                                            size="sm"
                                            type="button"
                                        >
                                            <i className="now-ui-icons arrows-1_minimal-left"></i>
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
                                            color="info"
                                            name="button"
                                            size="sm"
                                            type="button"
                                        >
                                            <i className="now-ui-icons arrows-1_minimal-right"></i>
                                        </Button>
                                    </a>
                                </Carousel>
                                <p className="blockquote blockquote-info">
                                    "And thank you for turning my personal jean jacket into a
                                    couture piece. Wear yours with mirrored sunglasses on
                  vacation." <br></br>
                                    <br></br>
                                    <small>Kanye West</small>
                                </p>
                            </Col>
                            <Col className="ml-auto mr-auto" md="6">
                                <h2 className="title">Saint Laurent</h2>
                                <h5 className="category">Slim-Fit Leather Biker Jacket</h5>
                                <h2 className="main-price">$3,390</h2>
                                <div
                                    aria-multiselectable={true}
                                    className="card-collapse"
                                    id="accordion"
                                    role="tablist"
                                >
                                    <Card className="card-plain">
                                        <CardHeader id="headingOne" role="tab">
                                            <a
                                                aria-expanded={collapses.includes(1)}
                                                data-parent="#accordion"
                                                data-toggle="collapse"
                                                href="#pablo"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    changeCollapse(1);
                                                }}
                                            >
                                                Description{" "}
                                                <i className="now-ui-icons arrows-1_minimal-down"></i>
                                            </a>
                                        </CardHeader>
                                        <Collapse isOpen={collapses.includes(1)}>
                                            <CardBody>
                                                <p>
                                                    Eres' daring 'Grigri Fortune' swimsuit has the fit and
                                                    coverage of a bikini in a one-piece silhouette. This
                                                    fuchsia style is crafted from the label's sculpting
                                                    peau douce fabric and has flattering cutouts through
                                                    the torso and back. Wear yours with mirrored
                                                    sunglasses on vacation.
                        </p>
                                            </CardBody>
                                        </Collapse>
                                    </Card>
                                    <Card className="card-plain">
                                        <CardHeader id="headingTwo" role="tab">
                                            <a
                                                aria-expanded={collapses.includes(2)}
                                                data-parent="#accordion"
                                                data-toggle="collapse"
                                                href="#pablo"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    changeCollapse(2);
                                                }}
                                            >
                                                Designer Information{" "}
                                                <i className="now-ui-icons arrows-1_minimal-down"></i>
                                            </a>
                                        </CardHeader>
                                        <Collapse isOpen={collapses.includes(2)}>
                                            <CardBody>
                                                <p>
                                                    An infusion of West Coast cool and New York attitude,
                                                    Rebecca Minkoff is synonymous with It girl style.
                                                    Minkoff burst on the fashion scene with her
                                                    best-selling 'Morning After Bag' and later expanded
                                                    her offering with the Rebecca Minkoff Collection - a
                                                    range of luxe city staples with a "downtown romantic"
                                                    theme.
                        </p>
                                            </CardBody>
                                        </Collapse>
                                    </Card>
                                    <Card className="card-plain">
                                        <CardHeader id="headingThree" role="tab">
                                            <a
                                                aria-expanded={collapses.includes(3)}
                                                data-parent="#accordion"
                                                data-toggle="collapse"
                                                href="#pablo"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    changeCollapse(3);
                                                }}
                                            >
                                                Details and Care{" "}
                                                <i className="now-ui-icons arrows-1_minimal-down"></i>
                                            </a>
                                        </CardHeader>
                                        <Collapse isOpen={collapses.includes(3)}>
                                            <CardBody>
                                                <ul>
                                                    <li>Storm and midnight-blue stretch cotton-blend</li>
                                                    <li>
                                                        Notch lapels, functioning buttoned cuffs, two front
                                                        flap pockets, single vent, internal pocket
                          </li>
                                                    <li>Two button fastening</li>
                                                    <li>84% cotton, 14% nylon, 2% elastane</li>
                                                    <li>Dry clean</li>
                                                </ul>
                                            </CardBody>
                                        </Collapse>
                                    </Card>
                                </div>
                                <Row className="pick-size">
                                    <Col lg="6" md="8" sm="6">
                                        <label>Select color</label>
                                        <Select
                                            className="react-select"
                                            classNamePrefix="react-select"
                                            name=""
                                            onChange={(value) => setColorSelect(value)}
                                            options={[
                                                { value: "1", label: "Black" },
                                                { value: "2", label: "Gray" },
                                                { value: "3", label: "White" },
                                            ]}
                                            placeholder="Select color"
                                            value={colorSelect}
                                        ></Select>
                                    </Col>
                                    <Col lg="6" md="8" sm="6">
                                        <label>Select size</label>
                                        <Select
                                            className="react-select"
                                            classNamePrefix="react-select"
                                            name=""
                                            onChange={(value) => setSizeSelect(value)}
                                            options={[
                                                { value: "1", label: "Small " },
                                                { value: "2", label: "Medium" },
                                                { value: "3", label: "Large" },
                                            ]}
                                            placeholder="Select size"
                                            value={sizeSelect}
                                        ></Select>
                                    </Col>
                                </Row>
                                <Row className="justify-content-end">
                                    <Button className="mr-3" color="info">
                                        Add to Cart
                    <i className="now-ui-icons shopping_cart-simple"></i>
                                    </Button>
                                </Row>
                            </Col>
                        </Row>

                    </Container>

                </div>
                <div className="section related-products" data-background-color="black">
                    <Container>
                        <h3 className="title text-center">
                            You may also be interested in:
            </h3>
                        <Row>
                            <Col md="3" sm="6">
                                <Card className="card-product">
                                    <div className="card-image">
                                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                            <img
                                                alt="..."
                                                className="img rounded"
                                                src={saintLaurent}

                                            ></img>
                                        </a>
                                    </div>
                                    <CardBody>
                                        <h6 className="category text-danger">Trending</h6>
                                        <CardTitle tag="h4">
                                            <CardLink
                                                href="#pablo"
                                                onClick={(e) => e.preventDefault()}
                                            >
                                                Dolce &amp; Gabbana
                      </CardLink>
                                        </CardTitle>
                                        <div className="card-description">
                                            Dolce &amp; Gabbana's 'Greta' tote has been crafted in
                                            Italy from hard-wearing red textured-leather.
                    </div>
                                        <CardFooter>
                                            <div className="price-container">
                                                <span className="price">€1,459</span>
                                            </div>
                                            <Button
                                                className="btn-neutral btn-icon btn-round pull-right"
                                                color="default"
                                                data-placement="left"
                                                id="tooltip963523139"
                                            >
                                                <i className="now-ui-icons ui-2_favourite-28"></i>
                                            </Button>
                                            <UncontrolledTooltip
                                                delay={0}
                                                placement="left"
                                                target="tooltip963523139"
                                            >
                                                Add to wishlist
                      </UncontrolledTooltip>
                                        </CardFooter>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="3" sm="6">
                                <Card className="card-product">
                                    <div className="card-image">
                                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                            <img
                                                alt="..."
                                                className="img rounded"
                                                src={gucci}

                                            ></img>
                                        </a>
                                    </div>
                                    <CardBody>
                                        <h6 className="category text-muted">Popular</h6>
                                        <CardTitle tag="h4">
                                            <CardLink
                                                href="#pablo"
                                                onClick={(e) => e.preventDefault()}
                                            >
                                                Balmain
                      </CardLink>
                                        </CardTitle>
                                        <div className="card-description">
                                            Balmain's mid-rise skinny jeans are cut with stretch to
                                            ensure they retain their second-skin fit but move
                                            comfortably.
                    </div>
                                        <CardFooter>
                                            <div className="price-container">
                                                <span className="price">€459</span>
                                            </div>
                                            <Button
                                                className="btn-neutral btn-icon btn-round pull-right"
                                                color="default"
                                                data-placement="left"
                                                id="tooltip788385879"
                                            >
                                                <i className="now-ui-icons ui-2_favourite-28"></i>
                                            </Button>
                                            <UncontrolledTooltip
                                                delay={0}
                                                placement="left"
                                                target="tooltip788385879"
                                            >
                                                Add to wishlist
                      </UncontrolledTooltip>
                                        </CardFooter>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="3" sm="6">
                                <Card className="card-product">
                                    <div className="card-image">
                                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                            <img
                                                alt="..."
                                                className="img rounded"
                                                src={wooyoungmi}
                                            ></img>
                                        </a>
                                    </div>
                                    <CardBody>
                                        <h6 className="category text-muted">Popular</h6>
                                        <CardTitle tag="h4">
                                            <CardLink
                                                href="#pablo"
                                                onClick={(e) => e.preventDefault()}
                                            >
                                                Balenciaga
                      </CardLink>
                                        </CardTitle>
                                        <div className="card-description">
                                            Balenciaga's black textured-leather wallet is finished
                                            with the label's iconic 'Giant' studs. This is where you
                                            can...
                    </div>
                                        <CardFooter>
                                            <div className="price-container">
                                                <span className="price">€559</span>
                                            </div>
                                            <Button
                                                className="btn-neutral btn-icon btn-round pull-right"
                                                color="default"
                                                data-placement="left"
                                                id="tooltip29821793"
                                            >
                                                <i className="now-ui-icons ui-2_favourite-28"></i>
                                            </Button>
                                            <UncontrolledTooltip
                                                delay={0}
                                                placement="left"
                                                target="tooltip29821793"
                                            >
                                                Add to wishlist
                      </UncontrolledTooltip>
                                        </CardFooter>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="3" sm="6">
                                <Card className="card-product">
                                    <div className="card-image">
                                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                            <img
                                                alt="..."
                                                className="img rounded"
                                                src={saintLaurent1}
                                            ></img>
                                        </a>
                                    </div>
                                    <CardBody>
                                        <h6 className="category text-rose">Trending</h6>
                                        <CardTitle tag="h4">
                                            <CardLink
                                                href="#pablo"
                                                onClick={(e) => e.preventDefault()}
                                            >
                                                Dolce &amp; Gabbana
                      </CardLink>
                                        </CardTitle>
                                        <div className="card-description">
                                            Dolce &amp; Gabbana's 'Greta' tote has been crafted in
                                            Italy from hard-wearing red textured-leather.
                    </div>
                                        <CardFooter>
                                            <div className="price-container">
                                                <span className="price">€ 1,359</span>
                                            </div>
                                            <Button
                                                className="btn-neutral btn-icon btn-round pull-right"
                                                color="default"
                                                data-placement="left"
                                                id="tooltip338597952"
                                            >
                                                <i className="now-ui-icons ui-2_favourite-28"></i>
                                            </Button>
                                            <UncontrolledTooltip
                                                delay={0}
                                                placement="left"
                                                target="tooltip338597952"
                                            >
                                                Add to wishlist
                      </UncontrolledTooltip>
                                        </CardFooter>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>




        </>
    );
}

export default ProductPage;
