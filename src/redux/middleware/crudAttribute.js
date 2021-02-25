import axios from 'axios';
import $ from 'jquery';
import { actions } from '../action';


//5 
export const getAllAttributes = ({ dispatch, getState }) => next => action => {
    if (action.type === 'GET_ALL_ATTRIBUTES') {
         axios.get('https://community.leader.codes/api/stores/storeAttributes/'+action.payload)
     
       // axios.get('https://community.leader.codes/api/attributes/')
            .then(res => {
                dispatch(actions.setAttribute(res.data))
            }).catch(console.log("error")) }
    return next(action);
}
//7
export const newAttributes = ({ dispatch, getState }) => next => action => {
    return new Promise((resolve, reject) => {
    if (action.type === 'ADD_NEW_ATTRIBUTE') {
        var raw = JSON.stringify(action.payload)
        $.ajax({
            url: "https://community.leader.codes/api/attributes/newAttribute",
            method: "post",
            dataType: "json",
            contentType: "application/json",
            data: raw,
            success: function (data) {
                dispatch(actions.setCurrentAttribute(data))
                resolve(data)
                alert("התכונה נוצרה בהצלחה ")
               
            },
            error: function (err) {
                reject(err)
                alert("הוספת התכונה נכשלה")

            }}); }
    return next(action);
})};
//10
// export const addNewImageToProduct = ({ dispatch, getState }) => next => action => {

//     if (action.type === 'ADD_IMG_TO_PRODUCT') {
//         ;
//         dispatch(actions.setProductImage({ "p": action.payload.p, "i": action.payload.i }));
//         dispatch(actions.setFilteredItems(getState().productReducer.products))

//     }
//     return next(action);
// }
//11
export const deleteAttributes = ({ dispatch, getState }) => next => action => {
    if (action.type === 'DELETE_ATTRIBUTES') {
        axios.post('https://community.leader.codes/api/attributes/deleteAttribute/' + action.payload)
            .then(res => { 
                dispatch(actions.deleteOldAttribute(action.payload))
                alert("התכונה נמחקה בהצלחה ")

        }).catch(()=>{console.log("error");
        alert("מחיקת המוצר נכשלה")
    })}
    return next(action);
};
//13
export const editAttribute = ({ dispatch, getState }) => next => action => {
    if (action.type === 'EDIT_ATTRIBUTE') {
        var raw = JSON.stringify(action.payload);
        $.ajax({
            url: `https://community.leader.codes/api/attributes/editAttribute/${action.payload._id}`,
            method: "post",
            dataType: "json",
            contentType: "application/json",
            data: raw,
            success: function (data) {
                dispatch(actions.editOldAttribute(data))
                alert("התכונה נערכה בהצלחה")

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(XMLHttpRequest, " ", textStatus, " ", errorThrown)
                alert("עריכת התכונה נכשלה")

            }}); };
    return next(action);
};
                                                     

