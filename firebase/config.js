const firebase = require("firebase/app");
require("firebase/firestore");
var firebaseConfig = {
  apiKey: "AIzaSyCjmZKeu1ixWByyQ9yWgayQAgAOuAm3ieY",
  authDomain: "nodejs-app-24f58.firebaseapp.com",
  projectId: "nodejs-app-24f58",
  storageBucket: "nodejs-app-24f58.appspot.com",
  messagingSenderId: "1044879967525",
  appId: "1:1044879967525:web:1baa8cbd0bb56dabac06cc",
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

module.exports = { db };
