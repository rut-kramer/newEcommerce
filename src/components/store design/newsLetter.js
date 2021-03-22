import React from 'react'
import { actions } from '../../redux/action';
import { connect } from 'react-redux';
import {
    Row,
    Col,
    Container,
    Button
} from "reactstrap";
import "./newsLetter.css"
import homeImage from '../../assets/home.png';
function NewsLetter(props) {
    return (

        <Container fluid className="newsLetter-all" >
            {/* <div className="newsLetter-background-image"> */}
                <div style={{backgroundImage:`url(${homeImage})`,width:"100%"}}>
                <Row md="12" className="newsLetter-Title pt-5">NewsLetter</Row>
                <Row md="12" className="mt-2"><p className="newsLetter-SubTitle">
                    Sign up to receive news and updates along with 15% off your first order</p></Row>
                <Row md="12">
                    <Col md="3"></Col>
                    <Col md="4" className="p-0"><input className="newsLetter-input" value="Enter your email" style={{width:"100%",padding:0}}></input></Col>
                    <Col md="2" className="mb-2  p-0"><button className="newsLetter-button" style={{width:"100%",padding:0}}>Subscribe</button></Col>
                    <Col md="3"></Col>
                </Row>
            </div>
        </Container >
    )
}
const mapStateToProps = (state) => {
    return {
    }
}
const mapDispatchToProps = (dispatch) => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(NewsLetter);




