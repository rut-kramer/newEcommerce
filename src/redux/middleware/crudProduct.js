import { actions } from '../action';
import axios from 'axios';
import $ from 'jquery';

//5
export const getAllProducts = ({ dispatch, getState }) => next => action => {
    if (action.type === 'GET_ALL_PRODUCTS') {
        axios.get('https://community.leader.codes/api/products')
            .then(res => {
                dispatch(actions.setProducts(res.data))
                dispatch(actions.setFilteredItems(res.data));
            })
    }
    return next(action);
}
//7
export const newProduct = ({ dispatch, getState }) => next => action => {

    if (action.type === 'ADD_NEW_PRODUCTS') {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({ "SKU": action.payload.sku, "category": action.payload.category, "price": action.payload.price, "name": action.payload.name, "description": action.payload.description, "amount": action.payload.amount });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://community.leader.codes/api/products/newProduct", requestOptions)
            .then()
            .catch(error => console.log('error', error));
    }

    return next(action);
};

//10
export const addNewImageToProduct = ({ dispatch, getState }) => next => action => {

    if (action.type === 'ADD_IMG_TO_PRODUCT') {
        ;
        dispatch(actions.setProductImage({ "p": action.payload.p, "i": action.payload.i }));
        dispatch(actions.setFilteredItems(getState().productReducer.products))

    }
    return next(action);
}

//11
export const deleteProduct = ({ dispatch, getState }) => next => action => {
    if (action.type === 'DELETE_PRODUCT') {
        axios.post('https://community.leader.codes/api/products/deleteProduct/' + action.payload)
            .then(res => { dispatch(actions.getCommunity({ community: res.data })) });
    }

    return next(action);
};

//13
// לא גמור
export const editproduct = ({ dispatch, getState }) => next => action => {

    if (action.type === 'EDIT_PRODUCT') {
        ;
        var raw = JSON.stringify({ SKU: action.payload.sku, category: action.payload.category, price: action.payload.price, name: action.payload.name, description: action.payload.description, amount: action.payload.amount });



        $.ajax({
            url: `https://community.leader.codes/api/products/editProduct/${action.payload._id}`,
            method: "post",
            dataType: "json",
            contentType: "application/json",
            data: raw,
            success: function (data) {
                console.log(data)

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(XMLHttpRequest, " ", textStatus, " ", errorThrown)

            }
        });
    };
    return next(action);
};


