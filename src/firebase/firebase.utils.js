import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDu29H4mGDZYJUIcDi4VWimoc8OoWspzJA",
  authDomain: "crwn-db-51921.firebaseapp.com",
  databaseURL: "https://crwn-db-51921.firebaseio.com",
  projectId: "crwn-db-51921",
  storageBucket: "crwn-db-51921.appspot.com",
  messagingSenderId: "367062657951",
  appId: "1:367062657951:web:7bbcd171333c61607f2baa",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;