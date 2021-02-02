import axios from 'axios';
import $ from 'jquery';

import { actions } from '../action';


//4
export const getAllCategories = ({ dispatch, getState }) => next => action => {

    if (action.type === 'GET_ALL_CATEGORIES') {
        axios.get('https://community.leader.codes/api/categories')
            .then(res => {

                dispatch(actions.setCategories({ categories: res.data }))
            })
            .catch(err => console.log("errrrrrrr", err));
    }
    return next(action);
};
//8
export const createNewCategory = ({ dispatch, getState }) => next => action => {

    if (action.type === 'CREATE_NEW_CATEGORY') {
        ;
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({ "categoryName": action.payload.categoryName, "color": action.payload.color });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://community.leader.codes/api/categories/newCategoty", requestOptions)
            .then(response => response.json())
            .catch(error => console.log('error', error));
    }

    return next(action);
};

//12
export const deleteCategory = ({ dispatch, getState }) => next => action => {
    if (action.type === 'DELETE_CATEGORY') {
        axios.post('https://community.leader.codes/api/categories/deleteCategoty/' + action.payload)
            .then(res => {
                alert(`The product ${res.data.name} deleted!!`)
                dispatch(actions.getCommunity({ community: res.data }))
            });
    }

    return next(action);
};

//14
export const editCategory = ({ dispatch, getState }) => next => action => {

    if (action.type === 'EDIT_CATEGORY') {
        ;
        var raw = JSON.stringify({ categoryName: action.payload.categoryName, color: action.payload.color });
        $.ajax({
            url: `https://community.leader.codes/api/categories/editCategoty/${action.payload.id}`,
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
