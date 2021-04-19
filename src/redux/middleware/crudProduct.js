import axios from 'axios';
import $ from 'jquery';
import { actions } from '../action';


export const getAllProducts = ({ dispatch, getState }) => next => action => {
    if (action.type === 'GET_ALL_PRODUCTS') {
        axios.get('https://bullcommerce.shop/api/products')
            .then(res => {
                dispatch(actions.setProducts(res.data))
                dispatch(actions.setFilteredItems(res.data))
            }).catch(console.log("error"))
    }
    return next(action);
}
export const newProduct = ({ dispatch, getState }) => next => action => {
    return new Promise((resolve, reject) => {
        if (action.type === 'ADD_NEW_PRODUCTS') {
            var raw = JSON.stringify(action.payload)
            console.log(raw)
            $.ajax({
                url: "https://bullcommerce.shop/api/products/newProduct",
                method: "post",
                dataType: "json",
                contentType: "application/json",
                data: raw,
                success: function (data) {
                    // alert("add the product")
                    
                //     let options = Object.assign({}, res.data[0].products[0], { "color":  res.data[0].color});
                //     let p 
                   
                //         data.forEach(p=>{
                //        let options = Object.assign({}, p, { "color": data.color,"categoryName":c.categoryName});
                //         list.push(options);
                //            })
                //     });
                //     dispatch(actions.setProducts(list))
                //     dispatch(actions.setFilteredItems(list));
                // })
                  
                let options = Object.assign({}, data, { "color": data.category.color,"categoryName":data.category.categoryName});
                  //להוסיף את השינוי גם לרידקס הקטגוריות
                    dispatch(actions.addNewProduct(options));
                    dispatch(actions.addProductFiltered(getState().productReducer.products));
                    dispatch(actions.addProductFiltered(data));
                    resolve(data)
                },
                error: function (err) {
                    reject(err)
                    alert("תקלה! המוצר לא הוסף")
                }
            });
        }
        return next(action);
    })
};
//10
export const addNewImageToProduct = ({ dispatch, getState }) => next => action => {

    if (action.type === 'ADD_IMG_TO_PRODUCT') {
        ;
        dispatch(actions.setProductImage({ "p": action.payload.p, "i": action.payload.i }));
        dispatch(actions.setFilteredItems(getState().productReducer.products))

    }
    return next(action);
}
//11
export const deleteProduct = ({ dispatch, getState }) => next => action => {
    if (action.type === 'DELETE_PRODUCT') {
        axios.post('https://bullcommerce.shop/api/products/deleteProduct/' + action.payload)
            .then(res => {
                dispatch(actions.deleteOldProduct(action.payload))
                dispatch(actions.setFilteredItems(getState().productReducer.products));
                alert("המוצר נמחק בהצלחה")
            }).catch(
                () => {
                    console.log("error");
                    alert("המוצר נמחק")
                }
            )
    }
    return next(action);
};
//13
export const editproduct = ({ dispatch, getState }) => next => action => {
    if (action.type === 'EDIT_PRODUCT') {
        var raw = JSON.stringify(action.payload);
        $.ajax({
            url: `https://bullcommerce.shop/api/products/editProduct/${action.payload._id}`,
            method: "post",
            dataType: "json",
            contentType: "application/json",
            data: raw,
            success: function (data) {
                let options = Object.assign({}, data, { "color": data.category.color,"categoryName":data.category.categoryName});
                  //להוסיף את השינוי גם לרידקס הקטגוריות
// צריך שינוי גם בנווד
                dispatch(actions.editOldProduct(options))
                dispatch(actions.setFilteredItems(getState().productReducer.products));
                alert("המוצר התעדכן בהצלחה")

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(XMLHttpRequest, " ", textStatus, " ", errorThrown);
                alert("העדכון נכשל")
            }
        });
    };
    return next(action);
};


