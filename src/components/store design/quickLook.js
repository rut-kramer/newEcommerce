import React, { useState } from 'react'
import { connect } from "react-redux";
import { actions } from '../../redux/action';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    // Table,
    //  Container,
    //   Row,
    //    Col, 
    Button
} from 'reactstrap';
import './quickLook.css'



import ia006 from "../../assets/img/xd/ia_300000006.png";

function QuickLook(props) {
    function w3_close() {
        props.sideBarOpenORclose(false)
    }

    const [orderAmount, setOrderAmount] = useState(1)
    return (

        <div className="sideBar">
            <button
                onClick={w3_close}
                className="w3-bar-item w3-large">&times;
                    </button>

            <img alt="...." className="imageProductQLook mt-4"
                src={ia006}>
            </img>
            <div className="detailsProduct mt-2">

                <div>{props.currentProduct.name}</div>
                <div>{props.currentProduct.price}</div>
                <div>
                    <div className="qu mt-4">Quantity:</div>
                    {/* אולי כדאי להחליף לדיו את תגית טידי */}
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
                </div>
                <button className="btnCart"
                    onClick={() => props.addToCart(
                        {
                            "product": props.currentProduct,
                            "amount": orderAmount
                        }
                    )}
                >
                    <FontAwesomeIcon className="mr-2" icon={['fas', 'shopping-cart']}></FontAwesomeIcon>ADD TO CART
                        </button>
            </div>
        </div>

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
