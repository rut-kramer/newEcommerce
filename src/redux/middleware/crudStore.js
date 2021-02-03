import { actions } from '../action';
import axios from 'axios';

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
////יצירת חנות שרי
export const createNewStore = ({ dispatch, getState }) => next => action => {
    //שם הפונקציה בקומפוננטה צריכה להיות כמו השם הזה רק עם אותיות גדולות מפרידות בין מילה למילה
    if (action.type === 'CREATE_NEW_STORE') {
        // var storeManager = getState().userReducer.user._id;
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        //בקומפוננטה צריך לשלוח לפונ' את האוביקט שעוטף את כל שדות החנות
        var raw = JSON.stringify({
            "storeName": action.payload.nameStore,
            "storeDescription": action.payload.descriptionStore,
            "logo": action.payload.logoStore,
            "address": action.payload.addressStore,
            "tel": action.payload.phoneStore,
            "email": action.payload.emailStore,
            "colorDominates": action.payload.colorStore,
            "storeManager": getState().userReducer.user._id,
            "currency": action.payload.currency,
            "policy": action.payload.policy
        });
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        fetch("https://community.leader.codes/api/stores/newStore", requestOptions)
            .then(response => { console.log(response); response.json() })
            //.then(result => { dispatch(actions.setStore(result))})
            .catch(error => console.log('error', error));
    }

    return next(action);
};

export const getStoreByUser = ({ dispatch, getState }) => next => action => {
    if (action.type === 'GET_STORE_BY_USER') {

        axios.get('https://community.leader.codes/api/users/getAllStores/' + action.payload)
            .then(res => {
                console.log("gjhjet ", res.data);
                dispatch(actions.setStorePerUser(res.data))
            })
            .catch(err => console.log("errrrrrrr", err));
    }
    return next(action);
}

