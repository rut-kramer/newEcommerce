import axios from 'axios';
import $ from 'jquery';
import { actions } from '../action';


export const getAllCategories = ({ dispatch, getState }) => next => action => {
    if (action.type === 'GET_ALL_CATEGORIES') {
        axios.get('https://bullcommerce.shop/api/categories')
            .then(res => {
                dispatch(actions.setCategories(res.data))
            }).catch(err => console.log("errrrrrrr", err));
    }
    return next(action);
};
export const createNewCategory = ({ dispatch, getState }) => next => action => {
    return new Promise((resolve, reject) => {
        if (action.type === 'CREATE_NEW_CATEGORY') {
            var raw = JSON.stringify({ "store": action.payload.store, "categoryName": action.payload.categoryName, "color": action.payload.color, "masterCategory": action.payload.masterCategory });
            $.ajax({
                url: "https://bullcommerce.shop/api/categories/newCategoty",
                method: "post",
                dataType: "json",
                contentType: "application/json",
                data: raw,
                success: function (data) {
                    dispatch(actions.addNewCategory(data));
                    resolve(data)
                    // alert("הקטגוריה נוצרה בהצלחה")
                },
                error: function (err) {
                    console.log(err)
                    reject(err)
                    alert("הוספת הקטגוריה נכשלה")
                }
            });

        }
        return next(action);
    })
};
export const deleteCategory = ({ dispatch, getState }) => next => action => {
    if (action.type === 'DELETE_CATEGORY') {
        axios.post('https://bullcommerce.shop/api/categories/deleteCategoty/' + action.payload)
            .then(res => {
                dispatch(actions.deleteOldCategory(action.payload))
                alert("הקטגוריה נמחקה בהצלחה")


            }).catch(() => { console.log("error"); alert("מחיקת הקטגוריה נכשלה") })
    }
    return next(action);
};
export const editCategory = ({ dispatch, getState }) => next => action => {
    if (action.type === 'EDIT_CATEGORY') {
        var raw = JSON.stringify({ categoryName: action.payload.categoryName, masterCategory: action.payload.masterCategory, color: action.payload.color });
        $.ajax({
            url: `https://bullcommerce.shop/api/categories/editCategoty/${action.payload._id}`,
            method: "post",
            dataType: "json",
            contentType: "application/json",
            data: raw,
            success: function (data) {
                dispatch(actions.editOldCategory(data))
                alert("הקטגוריה התעדכנה בהצלחה")
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(XMLHttpRequest, " ", textStatus, " ", errorThrown)
                alert("עדכון הקטגוריה נכשל")

            }
        });
    };
    return next(action);
};
export const getCategoriesByStore = ({ dispatch, getState }) => next => action => {
    if (action.type === 'GET_CATEGORIES_BY_STORE') {
        axios.get('https://bullcommerce.shop/api/stores/storeCategories/' + action.payload)
            .then(res => {
                dispatch(actions.setCategories(res.data))
                let options = Object.assign({}, res.data[0].products[0], { "color": res.data[0].color });
                let list = [];
                res.data.forEach(c => {
                    c.products.forEach(p => {
                        let options = Object.assign({}, p, { "color": c.color, "categoryName": c.categoryName });
                        list.push(options);
                    })
                });
                dispatch(actions.setProducts(list))
                dispatch(actions.setFilteredItems(list));
            })
            .catch(err => console.log("errrrrrrr", err));
    }
    return next(action);
}