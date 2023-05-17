// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

  const firebaseConfig = {
    apiKey: "AIzaSyBrc91PXkLiy-QPwJXuTh6mOzsZDwaEU5E",
    authDomain: "fir-b5956.firebaseapp.com",
    projectId: "fir-b5956",
    storageBucket: "fir-b5956.appspot.com",
    messagingSenderId: "192867525257",
    appId: "1:192867525257:web:fac002b8a1b514e6c29c58"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase.auth();