import axios from 'axios';
import $ from 'jquery';

import { actions } from '../action';



export const userIdByEmail = ({ dispatch, getState }) => next => action => {

    if (action.type === 'USER_ID_BY_EMAIL') {
        axios.get('http://localhost:3000/register/userByEmail' + action.payload)
            .then(res => { dispatch(actions.getCommunity({ community: res.data })) });
    }

    return next(action);
};

export const uploadImage = ({ dispatch, getState }) => next => action => {
    if (action.type === "UPLOAD_IMAGE") {
        if (action.payload.size > 5242880) {
            alert(`sorry, the file ${action.payload.name} is too big file, Please remove it from the list`);
            return;
        }
        const myFile = new FormData();

        myFile.append("file", action.payload.file);
        $.ajax({
            "url": `https://files.codes/api/yeudit/upload`,
            // + getState().userReducer.user.uid,
            "method": "POST",
            "processData": false,
            "mimeType": "multipart/form-data",
            "contentType": false,
            "headers": {
                "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJEMnV4R05jcFZHUHczTUxXUWFhZHNPM2ttQWgxIiwiZW1haWwiOiJ5ZXVkaXRAbGVhZGVyLmNvZGVzIiwiaXAiOiI4MC4xNzkuMTQ3LjEwOSIsImlhdCI6MTYxNDE3MDk3NX0.ckGyN99m8KPoG7GoxArfHUx5a6lojfTICfb4jq4p_lY"
                // getState().userReducer.user.tokenFromCookies
            },
            "data": myFile,
            "async": false,
            success: function (data1) {

                alert("The picture uploaded successfully! " + JSON.parse(data1).data.url)
                dispatch(actions.setPicture(JSON.parse(data1).data.url));
                // dispatch(actions.setImagesArr(JSON.parse(data1).data.url));
                dispatch(actions.uploadImageNameAction({ func: action.payload.func, img: JSON.parse(data1).data.url }))

                console.log("picture", JSON.parse(data1));
                // dispatch(actions.setPicture(data1))
            },
            error: function (err) {
                console.log("err upload", err)
            }
        });

    }
    return next(action);
}

