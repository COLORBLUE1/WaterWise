// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8Lr2_-VmpZiceauDAyZwwq3Yflet4P_Y",
  authDomain: "waterwise-b6447.firebaseapp.com",
  projectId: "waterwise-b6447",
  storageBucket: "waterwise-b6447.firebasestorage.app",
  messagingSenderId: "441281517825",
  appId: "1:441281517825:web:b343a11b118871745e2300",
  measurementId: "G-KT34V6Y1N1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);