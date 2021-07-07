import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8gvKMiGZFUnfEZFPzKbj4oB3ek5z2yhU",
  authDomain: "disney-app-73c68.firebaseapp.com",
  projectId: "disney-app-73c68",
  storageBucket: "disney-app-73c68.appspot.com",
  messagingSenderId: "12622065542",
  appId: "1:12622065542:web:83a57fd0e8cbdee18e8607",
  measurementId: "G-6JJLGZZN9V",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
