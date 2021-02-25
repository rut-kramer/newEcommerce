import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./scrollNavbar.css"

// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  UncontrolledTooltip,
  Row,
  Col,
} from "reactstrap";

import { actions } from '../../redux/action';
import { connect } from 'react-redux';



function ScrollTransparentNavbar(props) {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [navbarColor, setNavbarColor] = React.useState(
    //   (document.documentElement.scrollTop > 499 || document.body.scrollTop) > 499
    //     ? ""
    //     : " navbar-transparent"
  );
  const [buyButtonColor, setBuyButtonColor] = React.useState(
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
        setNavbarColor("");
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
            <NavbarBrand to="/" tag={Link} id="navbar-brand">
              <img alt="..."
                src={props.objectFields.logo} className="logoHeader"></img>
            </NavbarBrand>
            <UncontrolledTooltip target="navbar-brand">
              To Home Store Page
            </UncontrolledTooltip>
          </div>
          <Collapse
            // isOpen={collapseOpen}
            navbar>
            <Nav className="mx-auto" id="ceva" navbar>
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
                    {item.childrenCategory.map((child, index) => (
                      <DropdownItem key={index} to="/sections#contact-us" tag={Link}>
                        {/* <i className="now-ui-icons tech_mobile"></i> */}
                        {child.categoryName}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </UncontrolledDropdown>

              ))}
            </Nav>
            <Link to="/">
              <FontAwesomeIcon className="mt-2 mr-3" icon={['fas', 'search']}></FontAwesomeIcon>
            </Link>
            <div className="separatorStripe"></div>
            <Link to={"/" + props.objectFields.storeName + "/cart"}>
              <FontAwesomeIcon className="mt-2 ml-3" icon={['fas', 'shopping-cart']}></FontAwesomeIcon>
            </Link>

            <Link to={"/" + props.objectFields.storeName + "/"}>

              <FontAwesomeIcon className="mt-2 ml-3" icon={['far', 'user-circle']}></FontAwesomeIcon>
            </Link>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    objectFields: state.storeReducer.objectFields,
    categories: state.categoriesReducer.categories
  }
}
const mapDispatchToProps = (dispatch) => ({
})
export default connect(mapStateToProps, mapDispatchToProps)(ScrollTransparentNavbar)