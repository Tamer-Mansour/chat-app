import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDfCIRCgNCsmZsUklEfiwTHjnqwa9oAU1o",
    authDomain: "chat-b8acc.firebaseapp.com",
    projectId: "chat-b8acc",
    storageBucket: "chat-b8acc.appspot.com",
    messagingSenderId: "613718088352",
    appId: "1:613718088352:web:328a6c448a9f7402dec7c5",
    measurementId: "G-GCX54GLKVW"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }