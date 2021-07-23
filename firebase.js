import firebase from 'firebase';
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBTFhQ-a4jQdIVSLPgLGfaX3osLEmenoUc",
    authDomain: "fbclone-next-1951e.firebaseapp.com",
    projectId: "fbclone-next-1951e",
    storageBucket: "fbclone-next-1951e.appspot.com",
    messagingSenderId: "110439031875",
    appId: "1:110439031875:web:7823365b8a1f384b7620f6"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };