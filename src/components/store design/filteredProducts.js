/*eslint-disable*/
import React, { useState, useEffect } from "react";
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

        const [collapses, setCollapses] = useState([1]);

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

        useEffect(() => {
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
                                onFilter(Math.round(values[0]), Math.round(values[1]));
                        });
                }
        }, []);

        const { addTermToFilterObject, addCategoryToFilterObject, onFilter } = props;

        // const [filterObject, setFilterObject] = useState({
        //         categories: [],
        //         attributes: []
        // });

        // const { alerts, setAlerts } = props;

        // const onFilter = (min, max) => {

        //         // props.setFObject(x);

        //         let filteredProducts = [];
        //         //filter by attributes
        //         if (Array.isArray(filterObject.attributes) && filterObject.attributes.length > 0)
        //                 filterObject.attributes.forEach(a => {
        //                         props.storeProducts.forEach(pr => {
        //                                 let pa;
        //                                 if (Array.isArray(pr.attributes) && pr.attributes.length > 0)
        //                                         pa = pr.attributes.find(at => at.attribute._id.toString() === a.attribute._id.toString());
        //                                 if (pa) {
        //                                         let terms = pa.terms.find(t => t._id.toString() === a.term._id.toString());
        //                                         if (terms && !filteredProducts.includes(pr)) { filteredProducts.push(pr); }
        //                                 }
        //                         })
        //                 });
        //         else filteredProducts = props.storeProducts;
        //         //filter the filtered array by categories
        //         let filterByCategories = [];
        //         if (Array.isArray(filterObject.categories) && filterObject.categories.length > 0) {
        //                 filterObject.categories.forEach(c => {
        //                         filteredProducts.filter(p => {
        //                                 if (p.category.toString() === c._id.toString())
        //                                         return p;
        //                         }).forEach(x => {
        //                                 filterByCategories.push(x)
        //                         })
        //                 })
        //                 filteredProducts = filterByCategories;
        //         }
        //         //filter the filtered array by price
        //         let filterProductsByPrice;
        //         filterProductsByPrice = filteredProducts.filter((p) => {
        //                 if (p.price >= min && p.price <= max)
        //                         return p;
        //         });
        //         // if (Array.isArray(filterProductsByPrice) && filterProductsByPrice.length > 0)
        //         filteredProducts = filterProductsByPrice;
        //         props.setFilteredProducts(filteredProducts);
        // }

        // const addTermToFilterObject = (attribute, term, ifCheck) => {
        //         if (ifCheck) {
        //                 let a = filterObject.attributes;
        //                 a.push({
        //                         "attribute": attribute,
        //                         "term": term
        //                 })
        //                 let ctgr = filterObject.categories;
        //                 setFilterObject({ attributes: a, categories: ctgr });
        //                 let tempAlerts = alerts;
        //                 tempAlerts.push(term.name);
        //                 setAlerts(tempAlerts);
        //                 console.log("a", alerts);

        //                 // props.setAttributesFilterObject(a);

        //         }
        //         else {
        //                 let a = filterObject.attributes;
        //                 a.splice(a.findIndex(v => v.term._d === term._d), 1);

        //                 // const index = a.indexOf({ "attribute": attribute, "term": term });
        //                 // if (index > -1)
        //                 //         a.splice(index, 1);
        //                 let ctgr = filterObject.categories;
        //                 setFilterObject({ attributes: a, categories: ctgr });

        //                 let tempAlerts = alerts;
        //                 tempAlerts.splice(tempAlerts.findIndex(v => v === term.name), 1);

        //                 setAlerts(tempAlerts);
        //                 console.log("a", alerts);

        //                 // props.setAttributesFilterObject(a);
        //         }
        //         onFilter(props.slideMin, props.slideMax)
        // }

        // const addCategoryToFilterObject = (category, ifCheck) => {
        //         if (ifCheck) {
        //                 let c = filterObject.categories;
        //                 c.push(category);
        //                 let attrb = filterObject.attributes;
        //                 setFilterObject({ attributes: attrb, categories: c });

        //                 let tempAlerts = alerts;
        //                 tempAlerts.push(category.categoryName);
        //                 setAlerts(tempAlerts);
        //                 console.log("a", alerts);
        //                 // props.setCategoriesFilterObject(c);
        //         }
        //         else {
        //                 let c = filterObject.categories;
        //                 const index = c.indexOf(category);
        //                 if (index > -1)
        //                         c.splice(index, 1);
        //                 let attrb = filterObject.attributes;
        //                 setFilterObject({ attributes: attrb, categories: c });

        //                 let tempAlerts = alerts;
        //                 tempAlerts.splice(tempAlerts.findIndex(v => v === category.categoryName), 1);

        //                 setAlerts(tempAlerts);
        //                 console.log("a", alerts);

        //                 // props.setCategoriesFilterObject(c);
        //         }
        //         onFilter(props.slideMin, props.slideMax);
        // }

        return (
                <>
                        <div className="collapse-panel" id="footerHead">
                                <CardBody className="pl-0">
                                        <Card className="card-refine card-plain">
                                                <CardHeader className="filter_title" id="headingOne" role="tab">
                                                        <h6 className="mb-0">
                                                                <a
                                                                        className="text-info d-flex justify-content-between"
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
                                                                        <FontAwesomeIcon icon={['fas', collapses.includes(1) ? 'minus' : 'plus']}></FontAwesomeIcon>
                                                                </a>
                                                        </h6>
                                                </CardHeader>
                                                <Collapse isOpen={collapses.includes(1)}>
                                                        <CardBody className="pl-0 pr-0">
                                                                <span
                                                                        className="price-left pull-left"
                                                                        id="price-left"
                                                                >
                                                                        ${minView}
                                                                </span>
                                                                <span
                                                                        className="price-right pull-right"
                                                                        id="price-right"
                                                                >
                                                                        ${maxView}
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
                                                <CardHeader className="filter_title" id="headingTwo" role="tab">
                                                        <h6>
                                                                <a
                                                                        className="text-info d-flex justify-content-between"
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
                                                                        <FontAwesomeIcon icon={['fas', collapses.includes(2) ? 'minus' : 'plus']}></FontAwesomeIcon>
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
                                                                <CardHeader className="filter_title" id="headingThree" role="tab">
                                                                        <h6>
                                                                                <a
                                                                                        className="text-info d-flex justify-content-between"
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
                                                                                        <FontAwesomeIcon icon={['fas', collapses.includes(index + 3) ? 'minus' : 'plus']}></FontAwesomeIcon>
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
                                                                                                                {att.name.toLowerCase() === "color" ?
                                                                                                                        <span style={{ border: '4px solid ' + term.name }} className="form-check-sign1-color">
                                                                                                                                <FontAwesomeIcon icon={['fas', 'check']}></FontAwesomeIcon>

                                                                                                                        </span>
                                                                                                                        :
                                                                                                                        <span className="form-check-sign1">
                                                                                                                                <FontAwesomeIcon icon={['fas', 'check']}></FontAwesomeIcon>

                                                                                                                        </span>

                                                                                                                }
                                                                                                                {term.name}
                                                                                                        </Label>
                                                                                                </FormGroup>

                                                                                        ))}
                                                                        </CardBody>

                                                                </Collapse>
                                                        </Card>

                                                ))}
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
                        setFilteredProducts: (p) => dispatch(actions.setFilteredItems(p)),
                        // setFObject: (x) => { dispatch(actions.setFilterObject(x)) },
                        setSliderMin: (x) => { dispatch(actions.setMinPrice(x)) },
                        setSliderMax: (x) => { dispatch(actions.setMaxPrice(x)) },
                        // setAttributesFilterObject: (x) => { dispatch(actions.setAttributesFilterObject(x)) },
                        // setCategoriesFilterObject: (x) => { dispatch(actions.setCategoriesFilterObject(x)) }
                }
        })(FilteredProducts);
