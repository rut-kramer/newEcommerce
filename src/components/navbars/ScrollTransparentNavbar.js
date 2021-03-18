import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./scrollNavbar.css";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import DndNavbar from "./DndCategories"

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  Nav,
  Container,
  UncontrolledTooltip,
  Button,
  // Row,
  // Col,
} from "reactstrap";

import { connect } from 'react-redux';
import { actions } from '../../redux/action';

function ScrollTransparentNavbar(props) {
  // const [collapseOpen, setCollapseOpen] = React.useState(false);
  // const [navbarColor, setNavbarColor] = React.useState(
  //   (document.documentElement.scrollTop > 499 || document.body.scrollTop) > 499
  //     ? ""
  //     : " navbar-transparent"
  // );
  // buyButtonColor
  const [, setBuyButtonColor] = React.useState(
    (document.documentElement.scrollTop > 499 || document.body.scrollTop) > 499
      ? "info"
      : "neutral"
  );
  React.useEffect(() => {

    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 499 ||
        document.body.scrollTop > 499
      ) {
        // setNavbarColor("");
        setBuyButtonColor("info");
      } else if (
        document.documentElement.scrollTop < 500 ||
        document.body.scrollTop < 500
      ) {
        // setNavbarColor(" navbar-transparent");
        setBuyButtonColor("neutral");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };

  });
  return (
    <>

      {/* מחקנו מבצע שההידר יהיה סטיקי */}
      {/* className={"fixed-top" + navbarColor} */}
      <Navbar color="white" expand="lg">
        <Container className="d-flex justify-content-between">
          <div className="navbar-translate">
            <NavbarBrand to={"/" + props.objectFields.storeName} tag={Link} id="navbar-brand">
              <img alt="..."
                src={props.objectFields.logo} className="logoHeader"
                onClick={() => props.changeCurrentComponent("HomeConfigurator")}

              >
              </img>
              {/* <Button

              >tt</Button> */}
            </NavbarBrand>
            <UncontrolledTooltip target="navbar-brand">
              To Home Store Page
            </UncontrolledTooltip>
          </div>
          <Collapse
            className="d-flex justify-content-between"
            // isOpen={collapseOpen}
            navbar>
            <DndNavbar></DndNavbar>
            {/* <Nav className="mx-auto" id="ceva" navbar>
              {props.categories.filter(item => {
                if (!item.masterCategory && item.masterCategory === null)
                  return item
              }).map((item, index) => (

                <UncontrolledDropdown nav key={index}>

                  <DropdownToggle
                    caret
                    color="default"
                    data-toggle="dropdown"
                    href="#pablo"
                    id="navbarDropdownMenuLink"
                    nav
                    onClick={(e) => e.preventDefault()}
                  >
                    <p>{item.categoryName}</p>
                  </DropdownToggle>

                  <DropdownMenu aria-labelledby="navbarDropdownMenuLink" right>
                    {console.log("iiiitem", item)}
                    {item.childrenCategory.map((child, index) => (
                      <DropdownItem key={index} to="/sections#contact-us" tag={Link}>
                        {/* <i className="now-ui-icons tech_mobile"></i> */}
            {/* {child.categoryName}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </UncontrolledDropdown>

              ))}
            </Nav>
             */}
            <div>
              <Link to="/" className="mr-2 ml-2" style={{ float: "left" }}>
                <FontAwesomeIcon className="mt-2 mr-3" icon={['fas', 'search']}></FontAwesomeIcon>
              </Link>
              <div className="separatorStripe mr-2 ml-2" style={{ float: "left" }}></div>
              <Link to={"/" + props.objectFields.storeName + "/cart"} className="mr-2 ml-2" style={{ float: "left" }}>
                <FontAwesomeIcon className="mt-2 ml-3" icon={['fas', 'shopping-cart']}></FontAwesomeIcon>
                <span className="badge rounded-pill badge-notification" style={{ backgroundColor: "#FC894D" }}>{props.cartProducts.length}</span>
              </Link>

              <Link to={"/" + props.objectFields.storeName + "/"} className="mr-2 ml-2" style={{ float: "left" }}>

                <FontAwesomeIcon className="mt-2 ml-3" icon={['far', 'user-circle']}></FontAwesomeIcon>
              </Link>
            </div>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    cartProducts: state.cartReducer.cart.products,
    objectFields: state.storeReducer.objectFields,
    categories: state.categoriesReducer.categories
  }
}
const mapDispatchToProps = (dispatch) => ({
  changeCurrentComponent: (e) => dispatch(actions.setCurrentComponent(e)),

})
export default connect(mapStateToProps, mapDispatchToProps)(ScrollTransparentNavbar)