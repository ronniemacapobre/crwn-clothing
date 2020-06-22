import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAlGtMEMxHQ2kbVE8ZKv-4tz84d8IuqQec',
  authDomain: 'crwn-clothing-db-2666d.firebaseapp.com',
  databaseURL: 'https://crwn-clothing-db-2666d.firebaseio.com',
  projectId: 'crwn-clothing-db-2666d',
  storageBucket: 'crwn-clothing-db-2666d.appspot.com',
  messagingSenderId: '44033818421',
  appId: '1:44033818421:web:fa64c618d2f197a7a9167c',
  measurementId: 'G-M95ZJ3PJGP',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
