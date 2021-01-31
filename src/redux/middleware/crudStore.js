import { actions } from '../action';

//6
export const newStore = ({ dispatch, getState }) => next => action => {

    if (action.type === 'ADD_NEW_STORE') {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({ "storeName": action.payload.storeName, "storeDescription": action.payload.storeDescription, "storeManager": action.payload.storeManager });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:3000/register/addStore", requestOptions)
            .then(response => response.json())
            .then(result => { dispatch(actions.setStore(result)) })
            .catch(error => console.log('error', error));
    }

    return next(action);
};

//16
export const createNewStore = ({ dispatch, getState }) => next => action => {
    if (action.type === 'CREATE_NEW_STORE') {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({
            "storeName": action.payload.storeName,
            "urlRoute": action.payload.store.urlRoute,
            "storeDescription": action.payload.storeDescription,
            "logo": action.payload.logo,
            "address": action.payload.address,
            "tel": action.payload.tel,
            "email": action.payload.email,
            "colorDominates": action.payload.colorDominates,
            "storeManager": getState().userReducer.user._id,
            "currency": action.payload.currency,
            "policy": action.payload.policy,
            // "inventoryManagement": action.payload.inventoryManagement,//ניהול מלאי
            // "oneProductPurchase": action.payload.oneProductPurchase
        });
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        fetch("https://community.leader.codes/api/stores/newStore", requestOptions)
            .then(response => { console.log(response); response.json() })
            .catch(error => console.log('error', error));
    }

    return next(action);
};

