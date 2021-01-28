import { actions } from '../action';
import axios from 'axios';

export const newOrder = ({ dispatch, getState }) => next => action => {
    if (action.type === 'NEW_ORDER') {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({ "trackingID":1,"user":action.payload.user ,"store":action.payload.store, "userAddress": action.payload.address, "date": action.payload.date, "status": action.payload.status, "products": action.payload.product,"totalPrice":action.payload.totalPrice});
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };        fetch("https://community.leader.codes/api/orders/newOrder", requestOptions)
            .then(createOrder => {
                //שיהיה אפשרות מהרדוסר
                //שליחה לרדוסר
                // dispatch(actions.newOrder(createOrder))
            })
            .catch(error => console.log('error', error));}
    return next(action);
};

export const getAllOrders = ({ dispatch, getState }) => next => action => {
    if (action.type === 'GET_ALL_ORDERS') {
        axios.get('https://community.leader.codes/api/orders')
            .then(res => {
                dispatch(actions.setAllOrders(res.data))
            })
            .catch(err => console.log("errrrrrrr", err));
    }
    return next(action);
}