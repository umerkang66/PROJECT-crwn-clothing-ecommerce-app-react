import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyD4GQ63GqdqtRrX7o50Oq1TmZxsKYRyCjA',
  authDomain: 'crwn-clothing-db-8d20b.firebaseapp.com',
  projectId: 'crwn-clothing-db-8d20b',
  storageBucket: 'crwn-clothing-db-8d20b.appspot.com',
  messagingSenderId: '372482672874',
  appId: '1:372482672874:web:acd537b8828c2d08606f93',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
