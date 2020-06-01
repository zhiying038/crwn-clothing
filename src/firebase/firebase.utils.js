import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCWfdXLajBEziKa1kmtXFwv2umxQ6g5DCk",
  authDomain: "crwn-db-62538.firebaseapp.com",
  databaseURL: "https://crwn-db-62538.firebaseio.com",
  projectId: "crwn-db-62538",
  storageBucket: "crwn-db-62538.appspot.com",
  messagingSenderId: "409600447426",
  appId: "1:409600447426:web:4edae40135fb8873e73c5b",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;