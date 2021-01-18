import firebase from "firebase/app"
import "firebase/auth";
import "firebase/firestore";
import dotenv from 'dotenv'
dotenv.config()


firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
});

// firebase.auth.Auth.Persistence.LOCAL;


export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => {
    auth.signInWithPopup(googleProvider).then((res) => {
        // const token = await auth?.currentUser?.getIdToken(true);
    }).catch((error) => {
        console.log(error.message)
    })
}

export const signInWithEmailAndPassword = (email, password) => {
    auth.createUserWithEmailAndPassword(email, password)
        .then((user) => {
            console.log("e/p ", user.user);
        })
        .catch((error) => {
            // var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
            // ..
        });
}

// ...
// export const logOut = () => {
export const logOut = auth.signOut()
  // .then(()=> {
  //   console.log('logged out')
  //   // window.location.href='https://community.leader.codes/login'
  // }).catch((error) => {
  //   console.log(error.message)
  // })
// }





