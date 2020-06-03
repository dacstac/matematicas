import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBSzQ1SOsD1wwL-HopkKLLWmZrJCYRlqnA",
    authDomain: "matesreact.firebaseapp.com",
    databaseURL: "https://matesreact.firebaseio.com",
    projectId: "matesreact",
    storageBucket: "matesreact.appspot.com",
    messagingSenderId: "926373409895",
    appId: "1:926373409895:web:453fce27811573cedad0c2"
};
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase