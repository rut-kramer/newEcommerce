import React, { useState } from 'react'
import { connect } from "react-redux";
import { actions } from "../../redux/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table, Container, Row, Col, Button } from 'reactstrap';



import ia006 from "../../assets/img/xd/ia_300000006.png";

//בתוכ הסוגריים של הפונקציה מקבלים את הפרופס
function QuickLook(props) {

    const [orderAmount, setOrderAmount] = useState(1)

    return (
        <>
            <div className="sideBar">
                <img alt="...." className="imageProduct mt-4"
                    src={ia006}>
                </img>
                <div className="detailsProduct mt-2">
                    <div>name</div>
                    <div>price</div>
                    <div className="qu mt-4">Quantity:</div>

                    <td className="calcAmount">
                        <Button size="sm"
                            onClick={() => { setOrderAmount(orderAmount + 1) }}
                        >
                            <FontAwesomeIcon icon={['fas', 'plus']}></FontAwesomeIcon>
                        </Button>{' '}
                        {orderAmount}{' '}
                        <Button size="sm"
                            onClick={() => {
                                if (orderAmount > 1)
                                    setOrderAmount(orderAmount - 1);
                                else
                                    setOrderAmount(orderAmount)
                            }}
                        >
                            <FontAwesomeIcon icon={['fas', 'minus']}></FontAwesomeIcon>
                        </Button>
                    </td>
                    <button className="btnCart"
                        onClick={() => {
                            props.addToCart({
                                // "product": product,
                                "amount": orderAmount
                            })
                        }}>
                        <FontAwesomeIcon className="mr-2" icon={['fas', 'shopping-cart']}></FontAwesomeIcon>ADD TO CART
                        </button>
                </div>
            </div>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        cart: state.cartReducer.cart,
    }
}
const mapDispatchToProps = (dispatch) => ({
    addToCart: (product) => { dispatch(actions.addToCart(product)) }


})
export default connect(mapStateToProps, mapDispatchToProps)(QuickLook);


/////////////////////////////


