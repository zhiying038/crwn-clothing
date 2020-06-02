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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;