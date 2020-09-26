import * as firebase from "firebase";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBks2PUctd8qt3ih40O9S6PkIDwNdCLoKo",
  authDomain: "linkedin-clone-react.firebaseapp.com",
  databaseURL: "https://linkedin-clone-react.firebaseio.com",
  projectId: "linkedin-clone-react",
  storageBucket: "linkedin-clone-react.appspot.com",
  messagingSenderId: "321298268970",
  appId: "1:321298268970:web:b81bbcd526fe13d0439453",
  measurementId: "G-QQJLW9KQLR",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
