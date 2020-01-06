import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC4c5RXOPQwhOIHpsaA49JXnABpd9XRAw8",
    authDomain: "crwn-db-822b3.firebaseapp.com",
    databaseURL: "https://crwn-db-822b3.firebaseio.com",
    projectId: "crwn-db-822b3",
    storageBucket: "crwn-db-822b3.appspot.com",
    messagingSenderId: "880466417250",
    appId: "1:880466417250:web:a4ae2a14249c0315af633b",
    measurementId: "G-5HQZRJ8F57"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
