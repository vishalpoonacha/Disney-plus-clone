import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaQgLltuhxE_bQL_9O5MKUOlSBuspdwC4",
  authDomain: "disney-plus-clone-729da.firebaseapp.com",
  projectId: "disney-plus-clone-729da",
  storageBucket: "disney-plus-clone-729da.appspot.com",
  messagingSenderId: "392346497095",
  appId: "1:392346497095:web:43c31056184cd062158162",
  measurementId: "G-TYKRWWBTL1"
};


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage= firebase.storage();


  export {auth, provider, storage};
  export default db;