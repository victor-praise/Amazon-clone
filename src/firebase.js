// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDUL2ioUutIlzxtgf3clSCxPo-55MmcVwY",
    authDomain: "clone-c9d18.firebaseapp.com",
    databaseURL: "https://clone-c9d18.firebaseio.com",
    projectId: "clone-c9d18",
    storageBucket: "clone-c9d18.appspot.com",
    messagingSenderId: "860288158701",
    appId: "1:860288158701:web:6069985b33428cddaeb5e4",
    measurementId: "G-3K8PG8PQNW"
};
const firebaseApp= firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth= firebase.auth();
export {db,auth};