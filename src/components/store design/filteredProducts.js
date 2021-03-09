/*eslint-disable*/
import React, { useState } from "react";
// plugin that creates slider
import Slider from "nouislider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./filterProducts.css";

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
        UncontrolledCollapse
} from "reactstrap";

import { actions } from '../../redux/action';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";

function FilteredProducts(props) {

        const [collapses, setCollapses] = React.useState([1]);

        const changeCollapse = (collapse) => {
                if (collapses.includes(collapse)) {
                        setCollapses(collapses.filter((prop) => prop !== collapse));
                } else {
                        setCollapses([...collapses, collapse]);
                }
        };

        const history = useHistory();
        const [minView, setMinView] = useState(0);
        const [maxView, setMaxView] = useState(0);

        React.useEffect(() => {
                let min, max;
                if (Array.isArray(props.storeProducts) && props.storeProducts.length > 0) {
                        min = props.storeProducts[0].price;
                        max = props.storeProducts[0].price;
                        props.storeProducts.forEach(product => {
                                if (product.price > max)
                                        max = product.price;
                                if (product.price < min)
                                        min = product.price;
                        });
                        if (min === max)
                                min = 0;
                }


                if (
                        !document.getElementById("sliderRefine").classList.contains("noUi-target")
                ) {
                        Slider.create(document.getElementById("sliderRefine"), {
                                start: [min, max],
                                connect: [false, true, false],
                                step: 1,
                                range: { min: min, max: max },
                        }).on("update", function (values) {
                                props.setSliderMin(Math.round(values[0]));
                                props.setSliderMax(Math.round(values[1]));
                                setMinView(Math.round(values[0]));
                                setMaxView(Math.round(values[1]));
                                onFilter();
                        });
                }
        }, []);

        const [filterObject, setFilterObject] = React.useState({
                categories: [],
                attributes: []
        })

        const onFilter = async () => {
                // await props.setFilteredProducts(props.storeProducts);
                // if (type === 'category') {
                //         if (ifCheck) {
                //                 let c = filterObject.categories;
                //                 c.push(item);
                //                 setFilterObject({ categories: c })
                //         }
                //         else {
                //                 var index = filterObject.categories.indexOf(item);
                //                 if (index > -1) {
                //                         let c = filterObject.categories.splice(index, 1);
                //                         setFilterObject({ categories: c })
                //                 }
                //         }
                // }
                // else {
                //         if (type !== 'price') {
                //                 let attr = props.attributes.filter(a => {
                //                         if (a.name === type) { return a };
                //                 });
                //                 // let term = attr.terms.filter(t => {
                //                 //         if (t._id.toString() === item._id.toString()) { return t; }
                //                 // })
                //                 if (ifCheck) {
                //                         let a = filterObject.attributes;
                //                         filterObject.attributes.forEach((fa, index) => {
                //                                 if (fa.attribute._id.toString() === attr._id.toString()) {
                //                                         a[index].terms.push(item);
                //                                 }
                //                         })
                //                         setFilterObject({ attributes: a });
                //                 }
                //                 else {
                //                         var index = filterObject.attributes.filter((fa, i) => {
                //                                 if (fa.attribute._id.toString() === attr._id.toString())
                //                                         return i;
                //                         })
                //                         if (index[0] > -1) {
                //                                 let c = filterObject.attributes.splice(index, 1);
                //                                 setFilterObject({ attributes: c })
                //                         }
                //                 }
                //         }
                // }

                // let filter;
                // filterObject.categories.forEach(category => {
                //         filter = props.storeProducts.filter(p => {
                //                 if (p.category.toString() === category._id.toString())
                //                         return p;
                //         })
                // });

                // filterObject.attributes.forEach(attribute => {
                //         attribute.terms.forEach(t => {
                //                 filter = filter.filter(ff => {
                //                         if (ff.attributes.terms.includes(t, 0))
                //                                 return ff;
                //                 })
                //         })
                // })

                // if (Array.isArray(filter) && filter.length > 0)
                //         await props.setFilteredProducts(filter)


                // if (!Array.isArray(filter)) {
                //         filter = props.filterProducts;
                // }
                // let filterProductsByPrice = filter.filter((p) => {
                //         if (p.price >= props.slideMin && p.price <= props.slideMax)
                //                 return p;
                // });
                // if (Array.isArray(filterProductsByPrice) && filterProductsByPrice.length > 0)
                //         props.filteredProducts(filterProductsByPrice);
                let filteredProducts = [];
                //filter by attributes
                if (Array.isArray(filterObject.attributes) && filterObject.attributes.length > 0)
                        filterObject.attributes.forEach(a => {
                                props.storeProducts.forEach(p => {
                                        let pa = p.attributes.find(at => at.attribute._id.toString() === a.attribute._id.toString());
                                        if (pa) {
                                                let terms = pa.terms.find(t => t._id.toString() === a.term._id.toString());
                                                if (terms) { filteredProducts.push(p); }
                                        }
                                })
                        });
                else filteredProducts = props.storeProducts;
                //filter the filtered array by categories
                let filterByCategories;
                if (Array.isArray(filterObject.categories) && filterObject.categories.length > 0) {
                        filterObject.categories.forEach(c => {
                                filterByCategories = filteredProducts.filter(p => {
                                        if (p.category._id.toString() === c._id.toString())
                                                return p;
                                })
                        })
                        filteredProducts = filterByCategories;
                }
                //filter the filtered array by price
                let filterProductsByPrice = filteredProducts.filter((p) => {
                        if (p.price >= minView && p.price <= maxView)
                                return p;
                });
                if (Array.isArray(filterProductsByPrice) && filterProductsByPrice.length > 0)
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
                        setFilterObject({ attributes: a });
                }
                else {
                        let a = filterObject.attributes;
                        const index = a.indexOf({ attribute: attribute, term: term });
                        if (index > -1)
                                a.splice(index, 1);
                        setFilterObject({ attributes: a });
                }
                onFilter()
        }

        const addCategoryToFilterObject = (category, ifCheck) => {
                if (ifCheck) {
                        let c = filterObject.categories;
                        c.push(category);
                        setFilterObject({ categories: c });
                }
                else {
                        let c = filterObject.categories;
                        const index = c.indexOf(category);
                        if (index > -1)
                                c.splice(index, 1);
                        setFilterObject({ categories: c });
                }
                onFilter();
        }


        return (
                <>
                        <div className="collapse-panel" id="footerHead">
                                <CardBody>
                                        <Card className="card-refine card-plain">
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
                                                                        €{minView}
                                                                </span>
                                                                <span
                                                                        className="price-right pull-right"
                                                                        id="price-right"
                                                                >
                                                                        €{maxView}
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
                                                                </a>
                                                        </h6>
                                                </CardHeader>
                                                <Collapse isOpen={collapses.includes(2)}>
                                                        <CardBody className="pl-0">
                                                                {(Array.isArray(props.categories) &&
                                                                        props.categories.length) &&
                                                                        props.categories.map((item, index) => (
                                                                                <FormGroup check key={index}>
                                                                                        <Label check className="pl-0">
                                                                                                <Input
                                                                                                        // defaultChecked
                                                                                                        // item, type, ifCheck
                                                                                                        type="checkbox"
                                                                                                        onChange={(e) => addCategoryToFilterObject(item, e.target.checked)}></Input>
                                                                                                <span className="form-check-sign1">
                                                                                                        <FontAwesomeIcon icon={['fas', 'check']}></FontAwesomeIcon>

                                                                                                </span>
                                                                                                {item.categoryName}
                                                                                        </Label>
                                                                                </FormGroup>

                                                                        ))}
                                                        </CardBody>

                                                </Collapse>
                                        </Card>
                                        {(Array.isArray(props.attributes) && props.attributes.length > 0) &&
                                                props.attributes.filter(x => { if (Array.isArray(x.terms) && x.terms.length > 0) return x; }).map((att, index) => (
                                                        <Card className="card-refine card-plain">
                                                                <CardHeader id="headingThree" role="tab">
                                                                        <h6>
                                                                                <a
                                                                                        className="text-info"
                                                                                        aria-expanded={collapses.includes(index + 3)}
                                                                                        data-toggle="collapse"
                                                                                        data-parent="#accordion"
                                                                                        href="#pablo"
                                                                                        onClick={(e) => {
                                                                                                e.preventDefault();
                                                                                                changeCollapse(index + 3);
                                                                                        }}
                                                                                >
                                                                                        {att.name + " "}
                                                                                        <FontAwesomeIcon icon={['fas', 'chevron-down']}></FontAwesomeIcon>
                                                                                </a>
                                                                        </h6>
                                                                </CardHeader>
                                                                <Collapse isOpen={collapses.includes(index + 3)}>
                                                                        <CardBody className="pl-0">
                                                                                {
                                                                                        // (Array.isArray(att.terms) &&
                                                                                        //         props.categories.length) &&
                                                                                        att.terms.map((term, index) => (
                                                                                                <FormGroup check key={index}>
                                                                                                        <Label check className="pl-0">
                                                                                                                <Input
                                                                                                                        // defaultChecked
                                                                                                                        // attribute, term, ifCheck
                                                                                                                        type="checkbox"
                                                                                                                        onChange={(e) => addTermToFilterObject(att, term, e.target.checked)}></Input>
                                                                                                                <span className="form-check-sign1">
                                                                                                                        <FontAwesomeIcon icon={['fas', 'check']}></FontAwesomeIcon>

                                                                                                                </span>
                                                                                                                {term.name}
                                                                                                        </Label>
                                                                                                </FormGroup>

                                                                                        ))}
                                                                        </CardBody>

                                                                </Collapse>
                                                        </Card>

                                                ))}


                                        {/* <Card className="card-refine card-plain">
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
                                                                        Colour{" "}
                                                                        <FontAwesomeIcon icon={['fas', 'chevron-down']}></FontAwesomeIcon>
                                                                </a>
                                                        </h6>
                                                </CardHeader>
                                                <Collapse isOpen={collapses.includes(4)}>
                                                        <CardBody>
                                                                <FormGroup check>
                                                                        <Label check>
                                                                                <Input type="checkbox"></Input>
                                                                                <span className="form-check-sign"></span>
                                Blue
                              </Label>
                                                                </FormGroup>
                                                        </CardBody>
                                                </Collapse>
                                        </Card>
                                */}
                                </CardBody>
                        </div>

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
                        attributes: state.attributeReducer.attributes
                }
        },
        (dispatch) => {
                return {
                        setSliderMin: (x) => { dispatch(actions.setMinPrice(x)) },
                        setSliderMax: (x) => { dispatch(actions.setMaxPrice(x)) },
                        setFilteredProducts: (x) => { dispatch(actions.setFilteredItems(x)) }
                }
        })(FilteredProducts);



{/* <CardBody>
                                <Card className="card-refine card-plain">
                                        <CardHeader id="headingTwo" role="tab">
                                                <h6>
                                                        <a
                                                                className="text-info as"
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


                                <Card className="card-refine card-plain">

                                      
                          
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
                */}
