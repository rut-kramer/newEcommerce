import React from 'react'
import { actions } from "../../../redux/action"
import { connect } from 'react-redux';
import {
    Row,
    Col,
    Container
} from "reactstrap";

// image
import productInCart from "../../../assets/img/xd/631e3939-9988-41b6-a6fe-d60206ab0582@2x.png";

function CartPanel(props) {
    return (
        <Container>
            <div className="allProductInCart">
                {/*row פה צריך לעשות לולאה שתציג את כל המוצרים בתוך  */}
                <Row>
                    <img></img>
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
export default connect(mapStateToProps, mapDispatchToProps)(CartPanel);




