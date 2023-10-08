// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJsQVgvp7Izt8XAK-VgDayo2n7qLag3Nc",
  authDomain: "enlearn-platform-web.firebaseapp.com",
  projectId: "enlearn-platform-web",
  storageBucket: "enlearn-platform-web.appspot.com",
  messagingSenderId: "602895324718",
  appId: "1:602895324718:web:5e8885b2efb8b700e731bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;