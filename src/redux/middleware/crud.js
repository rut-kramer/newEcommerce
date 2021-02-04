import axios from 'axios';
import $ from 'jquery';

import { actions } from '../action';



//9
export const userIdByEmail = ({ dispatch, getState }) => next => action => {

    if (action.type === 'USER_ID_BY_EMAIL') {
        axios.get('http://localhost:3000/register/userByEmail' + action.payload)
            .then(res => { dispatch(actions.getCommunity({ community: res.data })) });
    }

    return next(action);
};

//17
export const uploadImage = ({ dispatch, getState }) => next => action => {
    if (action.type === "UPLOAD_IMAGE") {
        const myFile = new FormData();
        myFile.append("file", action.payload);
        $.ajax({
            "url": "https://community.leader.codes/api/uploadImage/" + getState().userReducer.user.uid,
            "method": "POST",
            "processData": false,
            "mimeType": "multipart/form-data",
            "contentType": false,
            "headers": {
                "Authorization": getState().userReducer.user.tokenFromCookies
            },
            "data": myFile,
            "async": false,
            success: function (data1) {
                dispatch(actions.setProfilePicture(data1))
            },
            error: function (err) {
                console.log("err upload", err)
            }
        });

    }
    return next(action);
}



