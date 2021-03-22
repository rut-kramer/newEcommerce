import React from 'react'
import { actions } from '../../redux/action';
import { connect } from 'react-redux';
import {
    Row,
    Col,
    Container,
    Button
} from "reactstrap";
import newsLetterImg from '../../assets/img/xd/newsLetter.png'
import "./newsLetter.css"
function NewsLetter(props) {
    return (
        <Container className="newsLetter-all">
            <Row md="12" className="newsLetter-Title pt-5">NewsLetter</Row>
            <Row md="12" className="mt-2"><p className="newsLetter-SubTitle">
                Sign up to receive news and updates along with 15% off your first order</p></Row>
            <Row md="12">
                <Col md="8"><input value="Enter your email"></input></Col>
                <Col md="4" className="mb-2"><button>Subscribe</button></Col>
            </Row>

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




