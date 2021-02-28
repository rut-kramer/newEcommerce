import { actions } from '../action';
import axios from 'axios';


//4
export const getAllPaper = ({ dispatch, getState }) => next => action => {
    if (action.type === 'GET_ALL_PAPER') {
         axios.get('https://community.leader.codes/api/papers/getAllPapersOfStore/'+action.payload)
            .then(res => {
                 dispatch(actions.setPapers(res.data))
            }).catch(err => console.log("errrrrrrr", err));
    }
    return next(action);
};
//8

export const createNewPaper = ({ dispatch, getState }) => next => action => {
        return new Promise((resolve, reject) => {
            if (action.type === 'CREATE_NEW_PAPER') {
                var raw = JSON.stringify(
                    {
                    name:action.payload.name,
                    description: action.payload.description,
                    store:getState().storeReducer.objectFields._id,
                    quillStyle:action.payload.quillStyle,                   
                   
                    });
                $.ajax({
                    url: "https://community.leader.codes/api/papers/newPaper",
                    method: "post",
                    dataType: "json",
                    contentType: "application/json",
                    data: raw,
                    success: function (data) {
                         dispatch(actions.setPaper(data));
                         dispatch(actions.addPaper(data));
                        resolve(data)
                    },
                    error: function (err) {
                        reject(err)
                    }
                });
            }
            return next(action);
        })
    };

export const deletePaper = ({ dispatch, getState }) => next => action => {
        if (action.type === 'DELETE_PAPER') {
                axios.post('https://community.leader.codes/api/papers/deletePaper/' + action.payload)
                        .then(res => {
                            //סרוטטטט
                             dispatch(actions.deleteOldPaper(action.payload))
                        }).catch(console.log("error"))
        }
        return next(action);
};
//14
export const editPaper= ({ dispatch, getState }) => next => action => {
        if (action.type === 'EDIT_PAPER') {
                var raw = JSON.stringify(action.payload);
                $.ajax({
                        url: `https://community.leader.codes/api/papers/editPaper/${action.payload._id}`,
                        method: "post",
                        dataType: "json",
                        contentType: "application/json",
                        data: raw,
                        success: function (data) {
                                dispatch(actions.editOldPaper(data))
                        },
                        error: function (XMLHttpRequest, textStatus, errorThrown) {
                                console.log(XMLHttpRequest, " ", textStatus, " ", errorThrown)
                        }
                });
        };
        return next(action);
};
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