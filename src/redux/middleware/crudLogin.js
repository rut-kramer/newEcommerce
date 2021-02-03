import $ from 'jquery';

import { actions } from '../action';
import { auth } from '../../services/firebase';

let username = "";

//1
export const setUserId = ({ dispatch, getState }) => next => action => {
    if (action.type === 'SET_ID') {
        $.ajax({
            url: `https://community.leader.codes/api/userByUid/${action.payload}`,
            method: "get",
            dataType: "json",
            contentType: "application/json",
            success: function (data) {
                dispatch(actions.setUserId(data));
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(XMLHttpRequest, " ", textStatus, " ", errorThrown)

            }
        });
    }
    return next(action);
}



//2
export const checkPermission = ({ dispatch, getState }) => next => action => {

    if (action.type === 'CHECK_PERMISSION') {

        let TokenToString = action.payload.accessToken.toString();
        let dataToProfilePage = {
            action: "loginCheckPermission",
            token: TokenToString,
        };
        $.ajax({
            url: "https://community.leader.codes/api/checkPremission/" + username,
            headers: {
                Authorization: TokenToString
            },
            method: "post",
            dataType: "json",
            contentType: "application/json",
            withCradentials: true,
            data: JSON.stringify(dataToProfilePage),
            success: function (data) {
                let jsonWebToken = data.jwt;
                let noQuotesJwtData = jsonWebToken.split('"').join("");
                let now = new Date();
                now.setMonth(now.getMonth() + 1);
                dispatch(actions.setId(data.uid));
                dispatch(actions.setUser({ "uid": data.uid, "username": data.username, "email": data.email, "tokenFromCookies": noQuotesJwtData }))
            },
        });

    }
    return next(action);
}

//3
export const onAuthStateChanged = ({ dispatch, getState }) => next => action => {

    if (action.type === 'ON_AUTH_STATE_CHANGED') {
        auth.onAuthStateChanged(function (user) {
            if (user) {
                username = user.displayName ? user.displayName : getState().userReducer.user.username;
                auth
                    .currentUser.getIdToken(true)
                    .then((firebaseToken) => {
                        $.ajax({
                            url: "https://community.leader.codes/api/getAccessToken",
                            method: "post",
                            dataType: "json",
                            contentType: "application/json",
                            data: JSON.stringify({
                                action: "firebaseloginwithcredentials",
                                jwt: firebaseToken
                            }),
                            success: function (data) {
                                dispatch(actions.checkPermission(data))
                            }
                        });
                    })
                    .catch(function (error) {
                        alert(error);
                    });
            }
        });
    }

    return next(action);
}




