import axios from 'axios';
import $ from 'jquery';

import { actions } from '../action';
import imageCompression from "browser-image-compression";


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

        // const options = {
        //     maxSizeMB: 1,
        //     maxWidthOrHeight: 1920,
        //     useWebWorker: true,
        // };
        const myFile = new FormData();
        myFile.append("file", action.payload.file);

        // async function a() {
        //     debugger
        //     const compressedFile = await imageCompression(action.payload.file, options);
        //     debugger
        //     myFile.append("file", compressedFile);

        // }

        // a();

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

// import imageCompression from "browser-image-compression";

// function App() {
//   async function handleImageUpload(event) {
//     const imageFile = event.target.files[0];

//     const options = {
//       maxSizeMB: 1,
//       maxWidthOrHeight: 1920,
//       useWebWorker: true,
//     };
//     try {

//       const compressedFile = await imageCompression(imageFile, options);

//       const formData = new FormData();
//       formData.append("File", compressedFile);

//       await fetch("http://localhost:7000/upload", {
//         method: "POST",
//         body: formData,
//         headers: {
//           name: compressedFile.name,
//         },
//       })
//         .then((result) => {
//           console.log("Success:", result);
//         })
//         .catch((error) => {
//           console.error("Error:", error);
//         });
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   return (
//     <div className="App">
//       <input name="foo" type="file" onChange={handleImageUpload} />
//     </div>
//   );
// }

// export default App;

