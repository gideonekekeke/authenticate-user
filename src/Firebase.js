import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

export const app = firebase.initializeApp({
  apiKey: "AIzaSyCBnnhcf98UnnobJ8b6WKv1j75vUGECjRU",
  authDomain: "auth-route.firebaseapp.com",
  projectId: "auth-route",
  storageBucket: "auth-route.appspot.com",
  messagingSenderId: "480802996367",
  appId: "1:480802996367:web:1e969c5237dcfd2d5f30fa",
});
