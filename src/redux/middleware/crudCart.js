// import axios from 'axios';
// import $ from 'jquery';
import { actions } from '../action';


//5
export const addToCart = ({ dispatch, getState }) => next => action => {
        if (action.type === 'ADD_TO_CART') {
                let flag = false;
                debugger
                getState().cartReducer.cart.products.map((product, index) => {
                        debugger
                        if (product.product.SKU.toString() === action.payload.product.SKU.toString()) {
                                flag = true;
                                dispatch(actions.pluseAmount(index));
                        }
                })

                if (!flag)
                        dispatch(actions.addProductToCart(action.payload))
        }
        return next(action);
}

export const changeProductAmount = ({ dispatch, getState }) => next => action => {
        if (action.type === 'CHANGE_AMOUNT') {
                debugger

                switch (action.payload.plusOrMinus) {
                        //action.payload={index:Number,plusOrMinus:"plus/minus"}
                        case "plus":
                                dispatch(actions.pluseAmount(action.payload.index))
                                break;
                        case "minus":
                                dispatch(actions.minuseAmount(action.payload.index))
                                break;

                        default:
                                break;
                }
                let totalPrice = 0;
                getState().cartReducer.cart.products.forEach(element => {
                        totalPrice += (element.amount * element.product.price);
                })
                dispatch(actions.setTotalPrice(totalPrice))

        }
        return next(action);
}







