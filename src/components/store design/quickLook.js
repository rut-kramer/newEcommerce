import React, { useState } from 'react';
import { connect } from "react-redux";
import { actions } from '../../redux/action';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Button
} from 'reactstrap';
import './quickLook.css'



import ia006 from "../../assets/img/xd/ia_300000006.png";

function QuickLook(props) {
    return (

        <div>
            <button
                onClick={props.w3_close}
                className="">&times;
                    </button>
            <img alt="...." className="imageProductQLook"
                src={ia006}>
            </img>
            <div className="detailsProduct mt-2">
                <div>{props.currentProduct.name}</div>
                <div>{props.currentProduct.price}</div>
                <div>
                    <div className="qu mt-4">Quantity:</div>
                    {/* אולי כדאי להחליף לדיו את תגית טידי */}
                    {/* <td className="calcAmount"> */}
                    <div className="calcAmount">

                        <Button size="sm"

                            onClick={(e) => {
                                e.stopPropagation();
                                props.setOrderAmount(props.orderAmount + 1)
                            }}
                        >
                            <FontAwesomeIcon icon={['fas', 'plus']}></FontAwesomeIcon>
                        </Button>{' '}
                        {props.orderAmount}{' '}
                        <Button size="sm"
                            onClick={(e) => {
                                e.stopPropagation();
                                if (props.orderAmount > 1)
                                    props.setOrderAmount(props.orderAmount - 1);
                                else
                                    props.setOrderAmount(props.orderAmount)
                            }}
                        >
                            <FontAwesomeIcon icon={['fas', 'minus']}></FontAwesomeIcon>
                        </Button>
                    </div>
                    {/* </td> */}
                </div>
                <button className="btnCart"
                    onClick={() => {
                        props.addToCart(
                            {
                                "product": props.currentProduct,
                                "amount": props.orderAmount
                            });
                        props.cartPanal_open()
                    }}
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
