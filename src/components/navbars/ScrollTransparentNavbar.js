import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  let masterCategoriesWithChildren = new Array();
  React.useEffect(() => {

    let masterCategories = props.categories.filter(c => {
      if (c.masterCategory === null && !c.masterCategory)
        return c;
    })
    for (let index = 0; index < masterCategories.length; index++) {
      let childrenCategories = props.categories.filter(c => {
        if (c.masterCategory === masterCategories[index])
          return c;
      })
      masterCategoriesWithChildren.push({
        "masterCategory": masterCategories[index],
        "childrenCategories": childrenCategories
      })
      console.log("ccccttttggggrryy", masterCategoriesWithChildren);

    }

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
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />

      ) : null}
      {/* מחקנו מבצע שההידר יהיה סטיקי */}
      {/* className={"fixed-top" + navbarColor}  */}
      <Navbar color="white" expand="lg">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand to="/" tag={Link} id="navbar-brand">
              <img alt="..."
                src={props.objectFields.logo} className="logo"></img>
            </NavbarBrand>
            {/* <UncontrolledTooltip target="navbar-brand">
              Designed by Invision. Coded by Creative Tim
            </UncontrolledTooltip> */}
            <button
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              className="navbar-toggler"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse isOpen={collapseOpen} navbar>
            <Nav className="mx-auto" id="ceva" navbar>

              <div class="topnav" style={{
                // backgroundColor: this.props.objectFields.colorDominates,
                overflow: "hidden",
                width: "82%"
              }}
                id="myTopnav">
                {props.categories.map((item, index) =>
                (
                  <Link key={index} to={"/0/category/" + item.categoryName} style={{
                    float: "right",
                    display: "block",
                    color: "#707070",
                    textAlign: "center",
                    padding: "14px 16px",
                    textDecoration: "none",
                    fontSize: "17px"
                  }} class="active">{item.categoryName}</Link>
                ))
                }
              </div>
              {/*  */}
              <UncontrolledDropdown nav>
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
                  <p>Categories</p>
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbarDropdownMenuLink" right>
                  <DropdownItem to="/sections#headers" tag={Link}>
                    <i className="now-ui-icons shopping_box"></i>
                    Headers
                  </DropdownItem>
                  <DropdownItem to="/sections#features" tag={Link}>
                    <i className="now-ui-icons ui-2_settings-90"></i>
                    Features
                  </DropdownItem>
                  <DropdownItem to="/sections#blogs" tag={Link}>
                    <i className="now-ui-icons text_align-left"></i>
                    Blogs
                  </DropdownItem>
                  <DropdownItem to="/sections#teams" tag={Link}>
                    <i className="now-ui-icons sport_user-run"></i>
                    Teams
                  </DropdownItem>
                  <DropdownItem to="/sections#projects" tag={Link}>
                    <i className="now-ui-icons education_paper"></i>
                    Projects
                  </DropdownItem>
                  <DropdownItem to="/sections#pricing" tag={Link}>
                    <i className="now-ui-icons business_money-coins"></i>
                    Pricing
                  </DropdownItem>
                  <DropdownItem to="/sections#testimonials" tag={Link}>
                    <i className="now-ui-icons ui-2_chat-round"></i>
                    Testimonials
                  </DropdownItem>
                  <DropdownItem to="/sections#contact-us" tag={Link}>
                    <i className="now-ui-icons tech_mobile"></i>
                    Contact Us
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
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
                    className="now-ui-icons design_image"
                  ></i>
                  <p>Examples</p>
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbarDropdownMenuLink" right>
                  <DropdownItem tag={Link} to="/about-us">
                    <i className="now-ui-icons business_bulb-63"></i>
                    About-us
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/blog-post">
                    <i className="now-ui-icons text_align-left"></i>
                    Blog Post
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/blog-posts">
                    <i className="now-ui-icons design_bullet-list-67"></i>
                    Blog Posts
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/contact-us">
                    <i className="now-ui-icons location_pin"></i>
                    Contact Us
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/landing-page">
                    <i className="now-ui-icons education_paper"></i>
                    Landing Page
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/login-page">
                    <i className="now-ui-icons users_circle-08"></i>
                    Login Page
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/pricing">
                    <i className="now-ui-icons business_money-coins"></i>
                    Pricing
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/e-commerce">
                    <i className="now-ui-icons shopping_shop"></i>
                    Ecommerce Page
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/product-page">
                    <i className="now-ui-icons shopping_bag-16"></i>
                    Product Page
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/profile-page">
                    <i className="now-ui-icons users_single-02"></i>
                    Profile Page
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/sign-up">
                    <i className="now-ui-icons tech_mobile"></i>
                    Signup Page
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

            </Nav>
            <FontAwesomeIcon className="mt-2 ml-5" icon={['fas', 'search']}></FontAwesomeIcon>
            <FontAwesomeIcon className="mt-2 ml-3" icon={['fas', 'shopping-cart']}></FontAwesomeIcon>
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