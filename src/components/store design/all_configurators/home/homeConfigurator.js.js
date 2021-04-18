import React, { useEffect } from "react";
import Slider from "nouislider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    Card,
    CardHeader,
    CardBody,
    Collapse,
    FormGroup,
    Container,
    Row,
    Col,
} from "reactstrap";
import { connect } from "react-redux";
import { actions } from "../../../../redux/action";
import { useHistory } from "react-router-dom";
import "./homeConfigurator.css"
import HeaderConfigurator from "./headerConfigurator"
import CategoryMenu from "../category/categoryMenu"
import SliderConfigurator from "./sliderConfigurator"
function HomeConfigurator(props) {
    const [collapses, setCollapses] = React.useState([0]);
    useEffect(() => {
        changeCollapse(props.collapseOfRedux)
        props.setCollapse("")
    }, [props.collapseOfRedux])


    const changeCollapse = (collapse) => {
        if (collapse != "") {

            if (collapses.includes(collapse)) {
                // setCollapses(collapses.filter((prop) => prop !== collapse));
                setCollapses([])
            } else {
                setCollapses([collapse]);
                // setCollapses([...collapses, collapse]);
            }
        }
    };


    const history = useHistory();
    const onFilter = () => {

        var filterProductsByPrice = props.products.map((p) => {
            return (p.price >= props.slideMin && p.price <= props.slideMax) ? p : null;
        });
        props.filteredProducts(filterProductsByPrice);
        history.push('/filter-category')
    }

    return (
        <>
            <Container>

                <Row>
                    <Col>
                        <CardBody>
                            <Card className="card-refine card-plain mb-1">
                                <CardHeader id="headingfour" role="tab">
                                    <h6 className="titleCollapse">
                                        <a
                                            aria-expanded={collapses.includes("menu")}
                                            data-toggle="collapse"
                                            data-parent="#accordion"
                                            href="#pablo"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                changeCollapse("menu");
                                            }}
                                        >
                                            <Row md="12">
                                                <div className="lineTafritHome mr-1"></div>
                                                < div>Menu</div>
                                            </Row>
                                            {" "}

                                        </a>
                                    </h6>
                                </CardHeader>
                                <Collapse isOpen={collapses.includes("menu")}>
                                    <CardBody className="Configurator-padding">
                                        <FormGroup check >
                                            {/* <HeaderConfigurator ></HeaderConfigurator> */}
                                            <CategoryMenu></CategoryMenu>
                                        </FormGroup>
                                    </CardBody>
                                </Collapse>
                            </Card>
                            <Card className="card-refine card-plain mb-1">
                                <CardHeader id="headingfour" role="tab">
                                    <h6 className="titleCollapse">
                                        <a
                                            style={{ color: "white !important" }}
                                            // className="text-info"
                                            aria-expanded={collapses.includes("slider")}
                                            data-toggle="collapse"
                                            data-parent="#accordion"
                                            href="#pablo"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                changeCollapse("slider");
                                            }}
                                        >
                                            <Row md="12">
                                                <div className="lineTafritHome mr-1"></div>
                                                < div>Slider</div></Row>

                                        </a>
                                    </h6>
                                </CardHeader>
                                <Collapse isOpen={collapses.includes("slider")}>
                                    <CardBody className="Configurator-padding">

                                        <FormGroup check>
                                            <SliderConfigurator></SliderConfigurator>
                                        </FormGroup>

                                    </CardBody>
                                </Collapse>
                            </Card>
                            <Card className="card-refine card-plain mb-1">
                                <CardHeader id="headingfour" role="tab">
                                    <h6 className="titleCollapse">
                                        <a
                                            style={{ color: "white !important" }}
                                            aria-expanded={collapses.includes(3)}
                                            data-toggle="collapse"
                                            data-parent="#accordion"
                                            href="#pablo"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                changeCollapse(3);
                                            }}
                                        >
                                            <Row md="12">
                                                <div className="lineTafritHome mr-1"></div>
                                                < div>Favorite Products</div>
                                            </Row>

                                        </a>
                                    </h6>
                                </CardHeader>
                                <Collapse isOpen={collapses.includes(3)}>
                                    <CardBody>
                                        <FormGroup check>Sara
                                        </FormGroup>
                                        <FormGroup check>
                                            Batya
                                        </FormGroup>
                                        <FormGroup check>
                                            Gila
                                        </FormGroup>
                                        <FormGroup check>
                                            Dina
                                        </FormGroup>
                                        <FormGroup check>
                                            Hadasa
                                        </FormGroup>

                                    </CardBody>
                                </Collapse>
                            </Card>
                            <Card className="card-refine card-plain mb-1">
                                <CardHeader id="headingfour" role="tab">
                                    <h6 className="titleCollapse">
                                        <a
                                            style={{ color: "white !important" }}
                                            aria-expanded={collapses.includes(4)}
                                            data-toggle="collapse"
                                            data-parent="#accordion"
                                            href="#pablo"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                changeCollapse(4);
                                            }}
                                        >
                                            <Row md="12">
                                                <div className="lineTafritHome mr-1"></div>
                                                < div>Footer</div></Row>
                                        </a>
                                    </h6>
                                </CardHeader>
                                <Collapse isOpen={collapses.includes(4)}>
                                    <CardBody>
                                        <FormGroup check>Sara
                                        </FormGroup>
                                        <FormGroup check>
                                            Batya
                                        </FormGroup>
                                        <FormGroup check>
                                            Gila
                                        </FormGroup>
                                        <FormGroup check>
                                            Dina
                                        </FormGroup>
                                        <FormGroup check>
                                            Hadasa
                                        </FormGroup>

                                    </CardBody>
                                </Collapse>
                            </Card>
                        </CardBody>
                    </Col>
                </Row>
            </Container >

        </>
    );
}


export default connect(
    (state) => {
        return {
            slideMin: state.filterReducer.minPrice,
            slideMax: state.filterReducer.maxPrice,
            collapseOfRedux: state.bullPageEditReducer.collapse
        }
    },
    (dispatch) => {
        return {
            filteredProducts: (p) => dispatch(actions.setFilteredItems(p)),
            setFilteredItems: (x) => { dispatch(actions.setFilteredItems(x)) },
            setCollapse: (collapseOfRedux) => { dispatch(actions.setCollapse(collapseOfRedux)) }
        }
    })(HomeConfigurator);


