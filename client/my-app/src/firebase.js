// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrCGTr9AyYJfIYgSsBmtHJBCgElQoTvXs",
  authDomain: "finalproject-b957f.firebaseapp.com",
  projectId: "finalproject-b957f",
  storageBucket: "finalproject-b957f.appspot.com",
  messagingSenderId: "628735599267",
  appId: "1:628735599267:web:9d6c87332a753ee9bc9516",
  measurementId: "G-9YBQV28FFH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
