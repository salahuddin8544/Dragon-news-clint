// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzbEMgPzwcuokeAPvfohAInULsZjDnigU",
  authDomain: "dragon-news-40361.firebaseapp.com",
  projectId: "dragon-news-40361",
  storageBucket: "dragon-news-40361.appspot.com",
  messagingSenderId: "233789065515",
  appId: "1:233789065515:web:380e8aef51dab3b3415d6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app