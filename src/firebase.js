/* eslint-disable linebreak-style */
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCheAiX3NZXa8w9cpnZakxHaWBmyHk5Cq8',
  authDomain: 'clone-a16f7.firebaseapp.com',
  projectId: 'clone-a16f7',
  storageBucket: 'clone-a16f7.appspot.com',
  messagingSenderId: '305099916529',
  appId: '1:305099916529:web:0182ae5baf77c19e44d550',
  measurementId: 'G-WNENEZQ8T1',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore(); // firestore is real time db in firebase

const auth = firebase.auth();

export { db, auth };
