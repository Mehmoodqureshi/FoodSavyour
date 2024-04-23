import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBtJ7KAP7ozuBSCypkqbtLzFzhCY2B-LuU",
    authDomain: "foodsavyour-e98f7.firebaseapp.com",
    projectId: "foodsavyour-e98f7",
    storageBucket: "foodsavyour-e98f7.appspot.com",
    messagingSenderId: "902030383326",
    appId: "1:902030383326:web:05777e25372b4db9ce8a4f",
    measurementId: "G-JVGF3W9DXR"
})
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseApp);
 }
 

const auth = firebase.auth();
const db = firebase.firestore();

// Export auth and db as named exports
export { auth, db };

// Add a default export if needed
export default firebase;