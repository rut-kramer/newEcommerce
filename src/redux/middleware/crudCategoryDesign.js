import { actions } from '../action';
import $ from 'jquery'

export const newCategoryDesign = ({ dispatch, getState }) => next => action => {
    if (action.type === 'NEW_CATEGORY_DESIGN') {
        var raw = JSON.stringify(action.payload);
        $.ajax({
            url: "https://bullcommerce.shop/api/designs/newCategoryDesign",
            method: "post",
            dataType: "json",
            contentType: "application/json",
            data: raw,
            success: function (data) {
                console.log("כל הכבוד לרינה ולשרי")
                // dispatch(actions.setCategoryDesign(data));
            },
            error: function (err) {
                console.log(err)
            }
        });

    }
    return next(action);
}











