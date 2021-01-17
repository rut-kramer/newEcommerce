// import { actions } from '../action';
// import axios from 'axios';
// import $ from 'jquery';


// //9
//כנראה לא צריך את הפונקציה הזו לחנות-לפרויקט העדכני
// export const userIdByEmail = ({ dispatch, getState }) => next => action => {

//     if (action.type === 'USER_ID_BY_EMAIL') {
//         axios.get('http://localhost:3000/register/userByEmail' + action.payload)
//             .then(res => { console.log("get ", res.data); dispatch(actions.getCommunity({ community: res.data })) });
//     }

//     return next(action);
// };

// //17
// export const uploadImage = ({ dispatch, getState }) => next => action => {
//     if (action.type === "UPLOAD_IMAGE") {
//         const myFile = new FormData();
//         myFile.append("file"/*, action.value*/, action.payload);
//         $.ajax({
//             "url": "https://community.leader.codes/api/uploadImage/" + getState().userReducer.user.uid,
//             // קריאה לשרת שלכן,
//             "method": "POST",
//             "processData": false,
//             "mimeType": "multipart/form-data",
//             "contentType": false,
//             "headers": {
//                 "Authorization": getState().userReducer.user.tokenFromCookies
//             },
//             "data": myFile,
//             "async": false,
//             success: function (data1) {
//                 console.log("success")
//                 console.log("data1", data1);
//                 dispatch(actions.setProfilePicture(/*action.payload,*/ data1))
//                 //שמירה בuser שנמצא בreducer))
//             },
//             error: function (err) {
//                 console.log("err upload", err)
//             }
//         });

//     }
//     return next(action);
// }



