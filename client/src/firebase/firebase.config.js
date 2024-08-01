// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-KZE8KH3elD7Fqts1DG_fxONVlJmeTVg",
  authDomain: "heritage-nest-4e56c.firebaseapp.com",
  projectId: "heritage-nest-4e56c",
  storageBucket: "heritage-nest-4e56c.appspot.com",
  messagingSenderId: "274039269508",
  appId: "1:274039269508:web:3859e4d003909e9b9d7ad1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;