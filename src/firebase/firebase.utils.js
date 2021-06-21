import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDyznRRKmELM7a_6mocnAZocTcTD3MqopI",
    authDomain: "ecommerce-5aa23.firebaseapp.com",
    databaseURL: "https://ecommerce-5aa23-default-rtdb.firebaseio.com",
    projectId: "ecommerce-5aa23",
    storageBucket: "ecommerce-5aa23.appspot.com",
    messagingSenderId: "1091890736339",
    appId: "1:1091890736339:web:aa8471eae40c5017767826",
    measurementId: "G-L15BJZSFNJ"
};


export const app = firebase.initializeApp(config);