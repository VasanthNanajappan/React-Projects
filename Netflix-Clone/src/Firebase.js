import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCN9nWpRheEymXILmsIGhWhfrDLIc7tQQY",
  authDomain: "clone-netflix-vasanth.firebaseapp.com",
  projectId: "clone-netflix-vasanth",
  storageBucket: "clone-netflix-vasanth.appspot.com",
  messagingSenderId: "959297970291",
  appId: "1:959297970291:web:8b941a53db215484fb8a06",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
export default firebase;
