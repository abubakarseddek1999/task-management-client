// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8sMtqQPki-YnibOPXt6iyvmlCJqqtNGQ",
  authDomain: "task-management-6ed33.firebaseapp.com",
  projectId: "task-management-6ed33",
  storageBucket: "task-management-6ed33.appspot.com",
  messagingSenderId: "271942489174",
  appId: "1:271942489174:web:3702dd40d34de44dc497f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
const auth = getAuth(app);
export default auth;