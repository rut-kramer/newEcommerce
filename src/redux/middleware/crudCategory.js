import { actions } from '../action';
import axios from 'axios';
import $ from 'jquery';
//4
export const getAllCategories = ({ dispatch, getState }) => next => action => {    if (action.type === 'GET_ALL_CATEGORIES') {
        axios.get('https://community.leader.codes/api/categories')
            .then(res => {
                dispatch(actions.setCategories(res.data))
            }) .catch(err => console.log("errrrrrrr", err));
    }
    return next(action);
};
//8
export const createNewCategory = ({ dispatch, getState }) => next => action => {
    return new Promise((resolve, reject) => {
    if (action.type === 'CREATE_NEW_CATEGORY') {
        var raw = JSON.stringify({"store":action.payload.store, "categoryName": action.payload.categoryName, "color": action.payload.color ,"masterCategory":action.payload.masterCategory});
        $.ajax({
            url: "https://community.leader.codes/api/categories/newCategoty",
            method: "post",
            dataType: "json",
            contentType: "application/json",
            data: raw,
            success: function (data) {
                dispatch(actions.addNewCategory(data));
                resolve(data)
            },
            error: function (err) {
                console.log(err)
                reject(err)
            } });}
    return next(action);
})};
export const deleteCategory = ({ dispatch, getState }) => next => action => {
    if (action.type === 'DELETE_CATEGORY') {
        axios.post('https://community.leader.codes/api/categories/deleteCategoty/' + action.payload)
            .then(res => {
                dispatch(actions.deleteOldCategory(action.payload))
            }).catch(console.log("error"))}
    return next(action);
};
//14
export const editCategory = ({ dispatch, getState }) => next => action => {
    if (action.type === 'EDIT_CATEGORY') {
        var raw = JSON.stringify({ categoryName: action.payload.categoryName, color: action.payload.color });
        $.ajax({
            url: `https://community.leader.codes/api/categories/editCategoty/${action.payload.id}`,
            method: "post",
            dataType: "json",
            contentType: "application/json",
            data: raw,
            success: function (data) {
              dispatch(actions.editOldCategory(data))
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(XMLHttpRequest, " ", textStatus, " ", errorThrown)
            }
        });
    };
    return next(action);
};