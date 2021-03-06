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

export const createUserProfileDocument = async function (
  userAuth,
  additionalData
) {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.error('Error creating user', err.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async function (
  collectionKey,
  objectsToAdd
) {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();

  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  // This logic will convert the collection array into object, with the key of collection title lower cased
  return transformedCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
