import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDjX67WAfR1LnWkik43mQKlKH2wOg7ownc",
    authDomain: "line-clone-b733b.firebaseapp.com",
    projectId: "line-clone-b733b",
    storageBucket: "line-clone-b733b.appspot.com",
    messagingSenderId: "884520326878",
    appId: "1:884520326878:web:8603dd4245287277df944f"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
