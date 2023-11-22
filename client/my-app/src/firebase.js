import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDrCGTr9AyYJfIYgSsBmtHJBCgElQoTvXs",
  authDomain: "finalproject-b957f.firebaseapp.com",
  projectId: "finalproject-b957f",
  storageBucket: "finalproject-b957f.appspot.com",
  messagingSenderId: "628735599267",
  appId: "1:628735599267:web:9d6c87332a753ee9bc9516",
  measurementId: "G-9YBQV28FFH"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);