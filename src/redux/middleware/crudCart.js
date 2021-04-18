// import axios from 'axios';
// import $ from 'jquery';
import product from '../../components/store design/product_page/product';
import { actions } from '../action';


//5
export const addToCart = ({ dispatch, getState }) => next => action => {
        if (action.type === 'ADD_TO_CART') {
                let flag = false;
                getState().cartReducer.cart.products.forEach((product, index) => {
                        if (product.product.SKU.toString() === action.payload.product.SKU.toString()) {
                                flag = true;
                                dispatch(actions.changeAmount({ index: index, amount: 1, plusOrMinus: "plus" }));
                        }
                })

                if (!flag)
                        dispatch(actions.addProductToCart(action.payload))
        }
        return next(action);
}

export const changeProductAmount = ({ dispatch, getState }) => next => action => {
        if (action.type === 'CHANGE_AMOUNT') {
                console.log("ppppp", action.payload);
                switch (action.payload.plusOrMinus) {
                        //action.payload={index:Number,plusOrMinus:"plus/minus"}
                        case "plus":
                                dispatch(actions.pluseAmount({ index: action.payload.index, amount: action.payload.amount }))
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







