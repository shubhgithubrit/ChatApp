import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCmM-0AQYZpGrWuYNh2jWmzLMqa2Wc02oE",
    authDomain: "chit-chat-98609.firebaseapp.com",
    databaseURL: "https://chit-chat-98609-default-rtdb.firebaseio.com",
    projectId: "chit-chat-98609",
    storageBucket: "chit-chat-98609.appspot.com",
    messagingSenderId: "669640937164",
    appId: "1:669640937164:web:359ab7c6eb311ad4873c69"
  };



// Initialize Firebase

firebase.initializeApp(firebaseConfig);
let database = firebase.database()

export { database }
