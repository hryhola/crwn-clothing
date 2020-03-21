import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDb-JcoocoSiWlg589kdL3H0dAUwUq6AfQ',
  authDomain: 'crwn-db-999.firebaseapp.com',
  databaseURL: 'https://crwn-db-999.firebaseio.com',
  projectId: 'crwn-db-999',
  storageBucket: 'crwn-db-999.appspot.com',
  messagingSenderId: '111282735053',
  appId: '1:111282735053:web:a054a393b53ad6d1482684',
  measurementId: 'G-PQ498LCDTK'
};

firebase.initializeApp(config);

export const createProfieDocument = async (userAuth, additionalData) => {
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
      });
    } catch (error) {
      console.error('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
