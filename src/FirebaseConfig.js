import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

require('dotenv').config();
var key = process.env.REACT_APP_KEY;

const config = {
    apiKey: key,
    authDomain: "wargame-e3497.firebaseapp.com",
    databaseURL: "https://wargame-e3497.firebaseio.com",
    projectId: "wargame-e3497",
    storageBucket: "wargame-e3497.appspot.com",
    messagingSenderId: "190741463412",
    appId: "1:190741463412:web:9c335f4eb4602ec89b6c21",
    measurementId: "G-RBSMEN97MD"
};

var firebaseApp = firebase.initializeApp(config)

export default firebaseApp;