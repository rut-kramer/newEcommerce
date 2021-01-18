import { actions } from '../action';
import $ from 'jquery';
import { auth } from '../../services/firebase';

let username = "";

//1
export const setUserId = ({ dispatch, getState }) => next => action => {
    if (action.type === 'SET_ID') {
        debugger;
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
                // let uid = data.uid;
                let noQuotesJwtData = jsonWebToken.split('"').join("");
                let now = new Date();
                now.setMonth(now.getMonth() + 1);
                debugger;
                // document.cookie = "jwt=" + noQuotesJwtData + ";domain=.leader.codes" + "; path=/; Expires=" + now.toUTCString() + ";"
               // const queryString = window.location.search;

                // const urlParams = new URLSearchParams(queryString);
                // const des = urlParams.get('des')
                // const routes = urlParams.get('routes')
                // const username = data.username
                debugger;
                dispatch(actions.setId(data.uid));
                dispatch(actions.setUser({ "uid": data.uid, "username": data.username, "email": data.email, "tokenFromCookies": noQuotesJwtData }))
                // let redirectUrl = ''
                // if (des) {
                //     redirectUrl = "https://" + des + '/' + username;
                //     if (routes) {
                //         redirectUrl += '/' + routes
                //     }
                //     window.location.href = redirectUrl
                // } 
                // else {
                // alert("hello!!")
                // window.location.href = "http://localhost:3001/userhome/" + username ;
                //  ;
                //window.location.href = (!data.is_username) ? "https://leader.codes/wizard" : "https://lobby.leader.codes/" + username
                // window.location.href=(!data.is_username) ? "http://localhost:3001/userhome/"+username : "http://localhost:3001/userhome/"+username;
                // }

                // let tempUserName = username.replace(' ', '%20')
                // if (window.location.href != 'http://localhost:3000/' + tempUserName) {
                //     window.location.href = '/' + username
                // }‏
                // let tempUserName = username.replace(' ', '%20')
                // if (window.location.href != 'http://localhost:3000/0') {
                //     window.location.href = 'http://localhost:3000/0' ;
                // }
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
                                // checkPremission(data);
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




