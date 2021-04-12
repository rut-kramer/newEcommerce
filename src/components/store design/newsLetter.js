import React from 'react'
import { actions } from '../../redux/action';
import { connect } from 'react-redux';
import {
    Row,
    Col,
    Container,
} from "reactstrap";
import ImageNewsLetter from '../../assets/3.jpg'
import "./newsLetter.css"
import homeImage from '../../assets/home.png';
function NewsLetter(props) {
    return (
        <Container fluid className="newsLetter-all" >
            <div style={{ backgroundImage: `url(${ImageNewsLetter})` }}>
            <Row md="12" className="newsLetter-Title pt-5 d-flex justify-content-center">NewsLetter</Row>
            <Row md="12" className="mt-2 d-flex justify-content-center"><p className="newsLetter-SubTitle ">
                Sign up to receive news and updates along with 15% off your first order</p></Row>
            <Row md="12" >
                <Col md="3"></Col>  
                <Col md="4" className="p-0">
                    <input className="newsLetter-input mb-4" value="Enter your email" style={{ position: "relative" }} />
                </Col>
                <Col md="2" className="p-0">
                    <button type="submit" className="newsLetter-button" style={{ position: "absolute" }}>Subscribe</button>
                </Col> 
                <Col md="3"></Col>
            </Row>
            </div>
        </Container>
    )
}
const mapStateToProps = (state) => {
    return {
    }
}
const mapDispatchToProps = (dispatch) => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(NewsLetter);




