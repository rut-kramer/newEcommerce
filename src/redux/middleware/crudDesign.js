import $ from 'jquery';
import { actions } from '../action';


export const newBullcommerceHeader = ({ dispatch, getState }) => next => action => {
        if (action.type === 'NEW_BULLCOMMERCE_HEADER_DESIGN') {
                var raw = JSON.stringify(action.payload);
                $.ajax({
                        url: `https://bullcommerce.shop/api/designs/newBullcommerceHeader/`,
                        method: "post",
                        dataType: "json",
                        contentType: "application/json",
                        data: raw,
                        success: function (data) {
                                console.log("object design", data);
                                dispatch(actions.setBHD(data))
                        },
                        error: function (XMLHttpRequest, textStatus, errorThrown) {
                                console.log(XMLHttpRequest, " ", textStatus, " ", errorThrown)
                        }
                });
        };
        return next(action);
};

export const editBullcommerceHeader = ({ dispatch, getState }) => next => action => {
        if (action.type === 'EDIT_BULLCOMMERCE_HEADER_DESIGN') {
                var raw = JSON.stringify(action.payload);
                $.ajax({
                        url: `https://bullcommerce.shop/api/designs/editBullcommerceHeader/${action.payload._id}`,
                        method: "post",
                        dataType: "json",
                        contentType: "application/json",
                        data: raw,
                        success: function (data) {
                                alert('Updated');
                                dispatch(actions.setBHD(data))
                        },
                        error: function (XMLHttpRequest, textStatus, errorThrown) {
                                console.log(XMLHttpRequest, " ", textStatus, " ", errorThrown)
                        }
                });
        };
        return next(action);
};
// /designs/getBHDByStoreId/:storeId
export const getBullcommerceHeaderByStoreId = ({ dispatch, getState }) => next => action => {
        if (action.type === 'GET_BHD_BY_STORE_ID') {
                $.ajax({
                        url: `https://bullcommerce.shop/api/designs/getBHDByStoreId/${action.payload}`,
                        method: "get",
                        dataType: "json",
                        contentType: "application/json",
                        success: function (data) {
                                console.log("object design", data);
                                dispatch(actions.setBHD(data))
                        },
                        error: function (XMLHttpRequest, textStatus, errorThrown) {
                                console.log(XMLHttpRequest, " ", textStatus, " ", errorThrown)
                        }
                });
        };
        return next(action);
};