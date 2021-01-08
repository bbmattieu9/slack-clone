import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyBowUN_e6vXGTDjSA-Ln1EFXpiQvnUD_xk",
  authDomain: "slack-clone-dd1f6.firebaseapp.com",
  projectId: "slack-clone-dd1f6",
  storageBucket: "slack-clone-dd1f6.appspot.com",
  messagingSenderId: "751793000445",
  appId: "1:751793000445:web:3be011fcd792a90ad15394",
  measurementId: "G-R5T00FJ13X"
};


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebaseApp.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
  