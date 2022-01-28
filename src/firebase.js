import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDv7s0IiZ4r2pyPk5cjpbKxf-f9wqle1U4",
  authDomain: "teamify-jusoft.firebaseapp.com",
  projectId: "teamify-jusoft",
  storageBucket: "teamify-jusoft.appspot.com",
  messagingSenderId: "569215127271",
  appId: "1:569215127271:web:e390b44d6986d1ebbe1c42",
  measurementId: "G-64XNP34QPC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
