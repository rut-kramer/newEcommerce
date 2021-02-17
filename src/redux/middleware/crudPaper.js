import $ from 'jquery';
import { actions } from '../action';
import axios from 'axios';


//4
// export const getAllCategories = ({ dispatch, getState }) => next => action => {
//     if (action.type === 'GET_ALL_CATEGORIES') {
//         axios.get('https://community.leader.codes/api/categories')
//             .then(res => {
//                 dispatch(actions.setCategories(res.data))
//             }).catch(err => console.log("errrrrrrr", err));
//     }
//     return next(action);
// };
//8
export const createNewPaper = ({ dispatch, getState }) => next => action => {
        if (action.type === 'CREATE_NEW_PAPER') {
                debugger
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                var raw = JSON.stringify({
                        "name": action.payload.name,
                        "description": action.payload.description,
                        "store": getState().storeReducer.currentStore,
                        "title": action.payload.title,
                        "content": action.payload.content,
                        "design": action.payload.design
                });
                console.log("paper raw", raw);
                var requestOptions = {
                        method: 'POST',
                        headers: myHeaders,
                        body: raw,
                        redirect: 'follow'
                };
                console.log(raw);
                axios({
                        method: 'post',
                        url: 'https://community.leader.codes/api/papers/newPaper',
                        data: {
                                raw
                        }
                })
                        // axios.post("https://community.leader.codes/api/papers/newPaper", raw)
                        .then(newPaper => {
                                debugger
                                dispatch(actions.setPaper(newPaper.paper));
                        })
                        .catch(error => {
                                debugger
                                console.log('error', error)
                        });
        }
        return next(action);
};
// export const deleteCategory = ({ dispatch, getState }) => next => action => {
//         if (action.type === 'DELETE_CATEGORY') {
//                 axios.post('https://community.leader.codes/api/categories/deleteCategoty/' + action.payload)
//                         .then(res => {
//                                 dispatch(actions.deleteOldCategory(action.payload))
//                         }).catch(console.log("error"))
//         }
//         return next(action);
// };
//14
// export const editCategory = ({ dispatch, getState }) => next => action => {
//         if (action.type === 'EDIT_CATEGORY') {
//                 var raw = JSON.stringify({ categoryName: action.payload.categoryName, color: action.payload.color });
//                 $.ajax({
//                         url: `https://community.leader.codes/api/categories/editCategoty/${action.payload.id}`,
//                         method: "post",
//                         dataType: "json",
//                         contentType: "application/json",
//                         data: raw,
//                         success: function (data) {
//                                 dispatch(actions.editOldCategory(data))
//                         },

//                         error: function (XMLHttpRequest, textStatus, errorThrown) {
//                                 console.log(XMLHttpRequest, " ", textStatus, " ", errorThrown)
//                         }
//                 });
//         };
//         return next(action);
// };
// export const getCategoriesByStore = ({ dispatch, getState }) => next => action => {
//         if (action.type === 'GET_CATEGORIES_BY_STORE') {

//                 axios.get('https://community.leader.codes/api/stores/storeCategories/' + action.payload)
//                         .then(res => {
//                                 dispatch(actions.setCategories(res.data))

//                                 let list = [];
//                                 res.data.forEach(c => {
//                                         c.products.forEach(p => {
//                                                 list.push(p)
//                                         });
//                                 });
//                                 dispatch(actions.setProducts(list))
//                                 dispatch(actions.setFilteredItems(list));




//                         })
//                         .catch(err => console.log("errrrrrrr", err));
//         }
//         return next(action);
// }