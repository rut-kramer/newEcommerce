import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

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
      {/* className={"fixed-top" + navbarColor}  */}
      <Navbar color="white" expand="lg">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand to="/" tag={Link} id="navbar-brand">
              <img alt="..."
                src={props.objectFields.logo} className="logo"></img>
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
                    <i
                      aria-hidden={true}
                      className="now-ui-icons files_paper"
                    ></i>
                    <p>{item.categoryName}</p>
                  </DropdownToggle>
                  <DropdownMenu aria-labelledby="navbarDropdownMenuLink" right>
                    {item.childrenCategory.map((child, index) => (
                      <DropdownItem key={index} to="/sections#contact-us" tag={Link}>
                        <i className="now-ui-icons tech_mobile"></i>
                        {child.categoryName}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </UncontrolledDropdown>
              ))}
            </Nav>

            <FontAwesomeIcon className="mt-2 ml-5" icon={['fas', 'search']}></FontAwesomeIcon>
            <Link to={"/" + props.objectFields.storeName + "/cart"}>
              <FontAwesomeIcon className="mt-2 ml-3" icon={['fas', 'shopping-cart']}></FontAwesomeIcon>
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