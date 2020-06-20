import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyDk7WptrUvf2EvnjdN__FRBlM2ydS_YjGg",
  authDomain: "bloodapp-be7bb.firebaseapp.com",
  databaseURL: "https://bloodapp-be7bb.firebaseio.com",
  projectId: "bloodapp-be7bb",
  storageBucket: "bloodapp-be7bb.appspot.com",
  messagingSenderId: "698472375636",
  appId: "1:698472375636:web:c16123cac87b9fc50494c1",
};
firebase.initializeApp(config);
firebase.firestore();

export const auth = firebase.auth();
export const db = firebase.firestore();
export default firebase;
