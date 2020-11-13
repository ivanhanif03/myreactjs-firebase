import firebase from 'firebase/app';
import 'firebase/auth';
// import 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyArf1kQdlu_EFOgwKs5K5SiAz69HsIWMiI",
    authDomain: "simple-notes-firebase-28.firebaseapp.com",
    databaseURL: "https://simple-notes-firebase-28.firebaseio.com",
    projectId: "simple-notes-firebase-28",
    storageBucket: "simple-notes-firebase-28.appspot.com",
    messagingSenderId: "603138755297",
    appId: "1:603138755297:web:9e73c575c036f75b9e45a0",
    measurementId: "G-EXYCMR91EB"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;