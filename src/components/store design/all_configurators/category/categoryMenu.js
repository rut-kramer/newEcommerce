import React from 'react'
import { connect } from "react-redux";
import { actions } from "../../../../redux/action"
import {
    Row,
    Col,
    Container,
} from "reactstrap";
import "./categoryMenu.css"
function CategoryMenu(props) {
    return (
        <>
            <Container fluid>

                <Row>
                    <Col
                        className="tafritSliderConfig"
                    >
                        <Row md="12" className="mt-3">Logo</Row>
                        <Row md="12" className="mt-3"><input type="file" className="inputLogo"></input></Row>
                        <Row md="12" className="mt-3">
                            <Col md="9" className="p-0"><label for="favcolor">Header Beckground Fill</label></Col>
                            <Col md="3" className="pr-0 pl-0">
                                <input type="color" id="favcolor" name="favcolor"
                                    onChange={(e) => { props.setBackgroundMenu(e.target.value) }}
                                />
                            </Col>
                        </Row>

                        <Row md="12" className="mt-3 p-0 mb-3">Choose Categories For Menu </Row>


                        {props.Categories.map((item) => (
                            <Row md="12">

                                <Col md="8">
                                    <label for="vehicle1" style={{ color: "white" }}>{item.categoryName}</label>
                                </Col>
                                <Col md="3">
                                    <>

                                        <input type="checkbox" style={{ outline: " 2px solid red" }}></input>
                                        {/* <input style={{ border: "1px solid red" }} type="checkbox" id="vehicle1" name="vehicle1"></input> */}
                                        {/* <input id="myCheck"
                                              name="checkInventoryManagement"
                                              type="checkbox"
                                              checked={detailsStore.checkInventoryManagement}
                                              // onClick={checkBoxFunc}
                                              onChange={(e) => setAllDetailsStore("check", e.target.checked)}
          
                                          />
                                          <br></br> */}
                                    </>
                                </Col>

                            </Row>
                        )
                        )}




                    </Col>
                </Row>
            </Container>


        </>
    )
}
const mapStateToProps = (state) => {
    return {
        Categories: state.categoriesReducer.categories,

    }
}
const mapDispatchToProps = (dispatch) => ({
    setBackgroundMenu: (color) => dispatch(actions.setBackgroundMenu(color))

})
export default connect(mapStateToProps, mapDispatchToProps)(CategoryMenu);

