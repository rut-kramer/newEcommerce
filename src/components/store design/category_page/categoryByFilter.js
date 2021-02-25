import React from "react";

// reactstrap components
import {
        Button,
        Card,
        CardBody,
        CardFooter,
        CardTitle,
        Container,
        Row,
        Col,
        UncontrolledTooltip
} from "reactstrap";

// core components
import ScrollTransparentNavbar from "../../navbars/ScrollTransparentNavbar.js";
import ProductPageHeader from "../../headers/ProductPageHeader.js";
import FooterSocial from "../../footers/FooterSocial.js";
import FilteredProducts from "../filteredProducts"

import polo from "../../../assets/img/polo.jpg";

import { actions } from '../../../redux/action';
import { connect } from 'react-redux';

function CategoryByFilter(props) {

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
                                                        <Col md="3">
                                                                <div className="collapse-panel">
                                                                        {/*קומפוננטת סינון המוצרים*/}
                                                                        <FilteredProducts></FilteredProducts>
                                                                </div>
                                                        </Col>
                                                        <Col md="9">
                                                                <Row>
                                                                        {props.filteredProducts.map((item, index) => (
                                                                                item ?
                                                                                        <Col lg="4" md="6" key={index}>

                                                                                                <Card className="card-product card-plain">
                                                                                                        <div className="card-image">
                                                                                                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                                                                                        <img
                                                                                                                                alt="..."
                                                                                                                                src={polo}
                                                                                                                        ></img>
                                                                                                                </a>
                                                                                                        </div>
                                                                                                        <CardBody>
                                                                                                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                                                                                        <CardTitle tag="h4">{item.name}</CardTitle>
                                                                                                                </a>
                                                                                                                <p className="card-description">
                                                                                                                        {item.description}
                                                                                                                </p>
                                                                                                                <CardFooter>
                                                                                                                        <div className="price-container">
                                                                                                                                <span className="price">€ {item.price}</span>
                                                                                                                        </div>
                                                                                                                        <Button
                                                                                                                                className="btn-neutral btn-icon btn-round pull-right"
                                                                                                                                color="danger"
                                                                                                                                data-placement="left"
                                                                                                                                id="tooltip719224088"
                                                                                                                        >
                                                                                                                                <i className="now-ui-icons ui-2_favourite-28"></i>
                                                                                                                        </Button>
                                                                                                                        <UncontrolledTooltip
                                                                                                                                delay={0}
                                                                                                                                placement="left"
                                                                                                                                target="tooltip719224088"
                                                                                                                        >
                                                                                                                                Remove from wishlist
                                                                                                                        </UncontrolledTooltip>
                                                                                                                </CardFooter>
                                                                                                        </CardBody>
                                                                                                </Card>
                                                                                        </Col>
                                                                                        : <></>

                                                                        ))}
                                                                </Row>
                                                        </Col>
                                                </Row>
                                        </Container>
                                </div>
                                <FooterSocial />
                        </div>
                </>
        );
}

export default connect(
        (state) => {
                return {
                        filteredProducts: state.filterReducer.filteredItems,
                }
        },
        (dispatch) => {
                return {
                        setFilteredProducts: (p) => dispatch(actions.setFilteredItems(p)),
                }
        }
)(CategoryByFilter);




