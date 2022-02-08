import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBJWFJKwKTm362rbooANK__hyTGY9UfX60",
    authDomain: "gestioncovoiturage-171f0.firebaseapp.com",
    projectId: "gestioncovoiturage-171f0",
    storageBucket: "gestioncovoiturage-171f0.appspot.com",
    messagingSenderId: "828801393714",
    appId: "1:828801393714:web:6da03cac8ba43949dc482b",
    measurementId: "G-K6VB7SZFSS"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export default firebase  