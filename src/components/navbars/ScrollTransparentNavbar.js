import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./scrollNavbar.css";
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import DndNavbar from "./DndCategories";
import { useHistory } from "react-router-dom";


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
import ModalExample from "../reactstrapComponents/modal";

function ScrollTransparentNavbar(props) {
  // const [collapseOpen, setCollapseOpen] = useState(false);
  // const [navbarColor, setNavbarColor] = useState(
  //   (document.documentElement.scrollTop > 499 || document.body.scrollTop) > 499
  //     ? ""
  //     : " navbar-transparent"
  // );
  // buyButtonColor

  const history = useHistory();

  const [modal, setModal] = useState(false);
  // const [searchText, setSearchText] = useState("");

  const [, setBuyButtonColor] = useState(
    (document.documentElement.scrollTop > 499 || document.body.scrollTop) > 499
      ? "info"
      : "neutral"
  );
  useEffect(() => {

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

  function searchObj(obj, searchText) {
    for (let key in obj) {
      let value = obj[key];
      let s;
      if (typeof value === 'object') {
        // return
        s = searchObj(value, searchText);
      }
      else {
        try {
          value = `${value}`;
        }
        finally {
          if ((typeof value === 'string' && value.toLowerCase().indexOf(searchText) > -1) || s) {
            return obj;
          }
        }
      }
    }
  }


  let searchPromise;
  let textValue

  async function asyncSearchFunction(elementRefValue) {
    textValue = elementRefValue;
    // elementRefValue.value.toLowerCase();
    await (
      searchPromise = new Promise((resolve, reject) => {
        let searchFilter = props.products.filter(obj => {
          return searchObj(obj, textValue);
        });

        resolve(searchFilter)
      })
    )


    searchPromise.then(async (msg) => {
      console.log("Promise resolved");
      console.log(msg);
      await props.setFilteredProducts(msg);
    }, () => {
      console.log("Promise reject");
    })
  }


  return (
    <>

      {/* מחקנו מבצע שההידר יהיה סטיקי */}
      {/* className={"fixed-top" + navbarColor} */}
      <Navbar id="store_main_navbar" color="white" expand="lg" style={{ maxWidth: props.mainWidth }}>
        <Container className="d-flex justify-content-between">
          {/* <div className="navbar-translate"> */}
          <NavbarBrand to={"/" + (props.objectFields.urlRoute ? props.objectFields.urlRoute : props.objectFields.storeName)} tag={Link} id="navbar-brand">
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
          {/* </div> */}
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
            <div className="d-flex justify-content-between">
              <div style={{ float: "left", cursor: "pointer" }} onClick={setModal}>
                {/* <Link to="/" className="mr-2 ml-2" style={{ float: "left" }}> */}
                <FontAwesomeIcon className="mt-2 mr-3" icon={['fas', 'search']} ></FontAwesomeIcon>
                {/* </Link> */}
              </div>
              <div className="separatorStripe" style={{ float: "left" }}></div>
              <Link to={"/" + (props.objectFields.urlRoute ? props.objectFields.urlRoute : props.objectFields.storeName) + "/cart"} style={{ float: "left" }}>
                <FontAwesomeIcon className="mt-2 ml-3" icon={['fas', 'shopping-cart']}></FontAwesomeIcon>
                <span className="badge rounded-pill badge-notification" style={{ backgroundColor: "#FC894D" }}>{props.cartProducts.length}</span>
              </Link>
            </div>
          </Collapse>
          {/* </div> */}
        </Container>
      </Navbar>
      {/* <Modal isOpen={modal} toggle={toggle} className="jijij">
              <ModalHeader toggle={toggle} close={closeBtn}>Modal title</ModalHeader>
              <ModalBody>
              <Input />
              </ModalBody>
              <ModalFooter>
              <Button color="primary" onClick={toggle}>Search</Button>{' '}
              </ModalFooter>
              </Modal>
            */}
      <ModalExample modal={modal} setModal={setModal} asyncSearchFunction={asyncSearchFunction}></ModalExample>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    cartProducts: state.cartReducer.cart.products,
    objectFields: state.storeReducer.objectFields,
    cartProducts: state.cartReducer.cart.products,
    products: state.productReducer.products,
    mainWidth: state.wrapReducer.mainWidth
  }
}
const mapDispatchToProps = (dispatch) => ({
  setFilteredProducts: (p) => dispatch(actions.setFilteredItems(p)),
  changeCurrentComponent: (e) => dispatch(actions.setCurrentComponent(e)),
})
export default connect(mapStateToProps, mapDispatchToProps)(ScrollTransparentNavbar)