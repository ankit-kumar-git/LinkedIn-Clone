import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAmLJm_5VhhY1d0BZH9klUwDmthHw_vrg0",
  authDomain: "linkedin-clone-2112f.firebaseapp.com",
  projectId: "linkedin-clone-2112f",
  storageBucket: "linkedin-clone-2112f.appspot.com",
  messagingSenderId: "358331964702",
  appId: "1:358331964702:web:86d9f5e3e2194b9c663d0f",
  measurementId: "G-G2JW7CGBW6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
