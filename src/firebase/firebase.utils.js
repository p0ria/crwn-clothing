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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();
    if(!snapshot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log('error creating user', error.message);
        }
    }
    
    return userRef;
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
