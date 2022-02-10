import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBhy7AC8QZsL6PTF-TgPy8xrHYbrjKcaQs",
    authDomain: "todo-app-8cfdc.firebaseapp.com",
    projectId: "todo-app-8cfdc",
    storageBucket: "todo-app-8cfdc.appspot.com",
    messagingSenderId: "945869781734",
    appId: "1:945869781734:web:e0948ce6899f2d71bd5927",
    measurementId: "G-HJN556T6VS"
});

const db = firebaseApp.firestore();
export default db;