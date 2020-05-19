import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCXxgw4KMa9ZbCF_83j4rDwuhdaQ1EuSOM",
    authDomain: "todo-app-f7251.firebaseapp.com",
    databaseURL: "https://todo-app-f7251.firebaseio.com",
    projectId: "todo-app-f7251",
    storageBucket: "todo-app-f7251.appspot.com",
    messagingSenderId: "824121107086",
    appId: "1:824121107086:web:d1c263c9f06a859f3f9fdf"
})

const db = firebaseApp.firestore();

export default db