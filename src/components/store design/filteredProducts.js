/*eslint-disable*/
import React from "react";
// plugin that creates slider
import Slider from "nouislider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

import { actions } from '../../redux/action';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";

function FilteredProducts(props) {

        // collapse states and functions
        const [collapses, setCollapses] = React.useState([1]);
        const changeCollapse = (collapse) => {
                if (collapses.includes(collapse)) {
                        setCollapses(collapses.filter((prop) => prop !== collapse));
                } else {
                        setCollapses([...collapses, collapse]);
                }
        };

        const history = useHistory();
        React.useEffect(() => {


                // let min = props.storeProducts[0].price,
                //         max = props.storeProducts[0].price;
                // props.products.forEach(product => {
                //         if (product.price > max)
                //                 max = product.price;
                //         if (product.price < min)
                //                 min = product.price;
                // });

                if (
                        !document.getElementById("sliderRefine").classList.contains("noUi-target")
                ) {
                        Slider.create(document.getElementById("sliderRefine"), {
                                start: [min + 20, max],
                                connect: [false, true, false],
                                step: 1,
                                range: { min: min, max: max },
                        }).on("update", function (values) {

                                props.setSliderMin(Math.round(values[0]));
                                props.setSliderMax(Math.round(values[1]));
                        });
                }
        }, []);

        const onFilter = () => {

                var filterProductsByPrice = props.products.map((p) => {
                        return (p.price >= props.slideMin && p.price <= props.slideMax) ? p : null;
                });
                props.filteredProducts(filterProductsByPrice);
                history.push('/filter-category')
        }

        return (
                <>
                        {/* <ScrollTransparentNavbar /> */}
                        {/* <div className="wrapper"> */}
                        {/* <EcommerceHeader /> */}
                        {/* <div className="main">
                                        <div className="section">
                                                <Container> */}
                        {/* <h2 className="section-title">Find what you need</h2> */}
                        {/* <Row> */}
                        {/* <Col md="3">
                                                                        <div className="collapse-panel"> */}
                        <CardBody>
                                <Card className="card-refine card-plain">
                                        {/* <CardTitle tag="h4">
                                                Refine{" "}
                                                <Button
                                                        className="btn-icon btn-neutral pull-right"
                                                        color="default"
                                                        id="tooltip633919451"
                                                >
                                                        <i className="arrows-1_refresh-69 now-ui-icons"></i>
                                                </Button>
                                                <UncontrolledTooltip
                                                        delay={0}
                                                        target="tooltip633919451"
                                                >
                                                        Reset Filter
                          </UncontrolledTooltip>
                                        </CardTitle> */}
                                        <CardHeader id="headingOne" role="tab">
                                                <h6 className="mb-0">
                                                        <a
                                                                className="text-info"
                                                                aria-expanded={collapses.includes(1)}
                                                                data-toggle="collapse"
                                                                data-parent="#accordion"
                                                                href="#pablo"
                                                                onClick={(e) => {
                                                                        e.preventDefault();
                                                                        changeCollapse(1);
                                                                }}
                                                        >
                                                                Price Range{" "}

                                                                <FontAwesomeIcon icon={['fas', 'chevron-down']}></FontAwesomeIcon>
                                                        </a>
                                                </h6>
                                        </CardHeader>
                                        <Collapse isOpen={collapses.includes(1)}>
                                                <CardBody>
                                                        <span
                                                                className="price-left pull-left"
                                                                id="price-left"
                                                        >
                                                                €{props.slideMin}
                                                        </span>
                                                        <span
                                                        // className="price-right pull-right"
                                                        // id="price-right"
                                                        >
                                                                €{props.slideMax}
                                                        </span>
                                                        <div className="clearfix"></div>
                                                        <div
                                                                className="slider slider-refine"
                                                                id="sliderRefine"
                                                        ></div>
                                                </CardBody>
                                        </Collapse>
                                </Card>
                                <Card className="card-refine card-plain">
                                        <CardHeader id="headingTwo" role="tab">
                                                <h6>
                                                        <a
                                                                className="text-info"
                                                                aria-expanded={collapses.includes(2)}
                                                                data-toggle="collapse"
                                                                data-parent="#accordion"
                                                                href="#pablo"
                                                                onClick={(e) => {
                                                                        e.preventDefault();
                                                                        changeCollapse(2);
                                                                }}
                                                        >
                                                                Categories{" "}
                                                                <FontAwesomeIcon icon={['fas', 'chevron-down']}></FontAwesomeIcon>

                                                                {/* <i className="now-ui-icons arrows-1_minimal-down"></i> */}
                                                        </a>
                                                </h6>
                                        </CardHeader>
                                        <Collapse isOpen={collapses.includes(2)}>
                                                <CardBody>
                                                        {props.categories.map((item, index) => (
                                                                <FormGroup check key={index}>
                                                                        <Label check>
                                                                                <Input type="checkbox"></Input>
                                                                                <span className="form-check-sign"></span>
                                                                                {item.categoryName}
                                                                        </Label>
                                                                </FormGroup>
                                                        ))}
                                                </CardBody>
                                        </Collapse>
                                </Card>
                                <Card className="card-refine card-plain">
                                        <CardHeader id="headingThree" role="tab">
                                                <h6>
                                                        <a
                                                                className="text-info"
                                                                aria-expanded={collapses.includes(3)}
                                                                data-toggle="collapse"
                                                                data-parent="#accordion"
                                                                href="#pablo"
                                                                onClick={(e) => {
                                                                        e.preventDefault();
                                                                        changeCollapse(3);
                                                                }}
                                                        >
                                                                Designer{" "}
                                                                <FontAwesomeIcon icon={['fas', 'chevron-down']}></FontAwesomeIcon>

                                                                {/* <i className="now-ui-icons arrows-1_minimal-down"></i> */}
                                                        </a>
                                                </h6>
                                        </CardHeader>
                                        <Collapse isOpen={collapses.includes(3)}>
                                                <CardBody>
                                                        <FormGroup check>
                                                                <Label check>
                                                                        <Input type="checkbox"></Input>
                                                                        <span className="form-check-sign"></span>
                                All
                              </Label>
                                                        </FormGroup>
                                                        <FormGroup check>
                                                                <Label check>
                                                                        <Input type="checkbox"></Input>
                                                                        <span className="form-check-sign"></span>
                                Polo Ralph Lauren
                              </Label>
                                                        </FormGroup>
                                                        <FormGroup check>
                                                                <Label check>
                                                                        <Input type="checkbox"></Input>
                                                                        <span className="form-check-sign"></span>
                                Wooyoungmi
                              </Label>
                                                        </FormGroup>
                                                        <FormGroup check>
                                                                <Label check>
                                                                        <Input type="checkbox"></Input>
                                                                        <span className="form-check-sign"></span>
                                Alexander McQueen
                              </Label>
                                                        </FormGroup>
                                                        <FormGroup check>
                                                                <Label check>
                                                                        <Input type="checkbox"></Input>
                                                                        <span className="form-check-sign"></span>
                                Tom Ford
                              </Label>
                                                        </FormGroup>
                                                        <FormGroup check>
                                                                <Label check>
                                                                        <Input type="checkbox"></Input>
                                                                        <span className="form-check-sign"></span>
                                AMI
                              </Label>
                                                        </FormGroup>
                                                        <FormGroup check>
                                                                <Label check>
                                                                        <Input type="checkbox"></Input>
                                                                        <span className="form-check-sign"></span>
                                Berena
                              </Label>
                                                        </FormGroup>
                                                        <FormGroup check>
                                                                <Label check>
                                                                        <Input type="checkbox"></Input>
                                                                        <span className="form-check-sign"></span>
                                Thom Sweeney
                              </Label>
                                                        </FormGroup>
                                                        <FormGroup check>
                                                                <Label check>
                                                                        <Input type="checkbox"></Input>
                                                                        <span className="form-check-sign"></span>
                                Calvin Klein
                              </Label>
                                                        </FormGroup>
                                                </CardBody>
                                        </Collapse>
                                </Card>
                                <Card className="card-refine card-plain">
                                        <CardHeader id="headingfour" role="tab">
                                                <h6>
                                                        <a
                                                                className="text-info"
                                                                aria-expanded={collapses.includes(4)}
                                                                data-toggle="collapse"
                                                                data-parent="#accordion"
                                                                href="#pablo"
                                                                onClick={(e) => {
                                                                        e.preventDefault();
                                                                        changeCollapse(4);
                                                                }}
                                                        >
                                                                Color{" "}
                                                                <FontAwesomeIcon icon={['fas', 'chevron-down']}></FontAwesomeIcon>

                                                                {/* <i className="now-ui-icons arrows-1_minimal-down"></i> */}
                                                        </a>
                                                </h6>
                                        </CardHeader>
                                        <Collapse isOpen={collapses.includes(4)}>
                                                <CardBody>
                                                        <FormGroup check>
                                                                <Label check>
                                                                        <Input type="checkbox"></Input>
                                                                        <span className="form-check-sign"></span>
                                Black
                              </Label>
                                                        </FormGroup>
                                                        <FormGroup check>
                                                                <Label check>
                                                                        <Input type="checkbox"></Input>
                                                                        <span className="form-check-sign"></span>
                                Blue
                              </Label>
                                                        </FormGroup>
                                                        <FormGroup check>
                                                                <Label check>
                                                                        <Input type="checkbox"></Input>
                                                                        <span className="form-check-sign"></span>
                                Brown
                              </Label>
                                                        </FormGroup>
                                                        <FormGroup check>
                                                                <Label check>
                                                                        <Input type="checkbox"></Input>
                                                                        <span className="form-check-sign"></span>
                                Gray
                              </Label>
                                                        </FormGroup>
                                                        <FormGroup check>
                                                                <Label check>
                                                                        <Input type="checkbox"></Input>
                                                                        <span className="form-check-sign"></span>
                                Green
                              </Label>
                                                        </FormGroup>
                                                        <FormGroup check>
                                                                <Label check>
                                                                        <Input type="checkbox"></Input>
                                                                        <span className="form-check-sign"></span>
                                Purple
                              </Label>
                                                        </FormGroup>
                                                </CardBody>
                                        </Collapse>
                                </Card>
                                <Button
                                        className="btn-round"
                                        color="info"
                                        id="tooltip51956640"
                                        onClick={() => { onFilter() }}
                                >
                                        Filter
                                </Button>
                                <UncontrolledTooltip
                                        delay={0}
                                        target="tooltip51956640"
                                >Find what you need...</UncontrolledTooltip>
                        </CardBody>
                </>
        );
}

export default connect(
        (state) => {
                return {
                        slideMin: state.filterReducer.minPrice,
                        slideMax: state.filterReducer.maxPrice,
                        storeProducts: state.productReducer.products,
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
)(FilteredProducts);



