import firebase, { firestore } from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACxBtvL9Wvx4UYr5YnKP7oGucEOp0xjzQ",
  authDomain: "cloud-library-cms.firebaseapp.com",
  projectId: "cloud-library-cms",
  storageBucket: "cloud-library-cms.appspot.com",
  messagingSenderId: "14994764058",
  appId: "1:14994764058:web:8f113ca1e623994537bca3",
  measurementId: "G-X1XC9GT57Z"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
