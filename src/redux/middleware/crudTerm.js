import axios from 'axios';
import $ from 'jquery';
import { actions } from '../action';


export const newTerm = ({ dispatch, getState }) => next => action => {
    return new Promise((resolve, reject) => {
    if (action.type === 'NEW_TERM') {
        var raw = JSON.stringify(action.payload)
        $.ajax({
            url: "https://bullcommerce.shop/api/terms/newTerm",
            method: "post",
            dataType: "json",
            contentType: "application/json",
            data: raw,
            success: function (data) {
                // dispatch(actions.setCurrentAttribute(data))
                resolve(data)
                alert("התכונה נוצרה בהצלחה ")
               
            },
            error: function (err) {
                reject(err)

            }}); }
    return next(action);
})};

export const deleteTerms = ({ dispatch, getState }) => next => action => {
    if (action.type === 'DELETE_TERMS') {
        axios.post('https://bullcommerce.shop/api/terms/delete/' + action.payload)
            .then(res => { 
        }).catch(()=>{console.log("error");
        alert("מחיקת המונח נכשלה")
    })}
    return next(action);
};