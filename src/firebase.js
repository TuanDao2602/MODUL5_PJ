// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAq2Rwc-G8MO3Ejfx2X1HsnkLN1u49iFWo",
  authDomain: "demo2-25504.firebaseapp.com",
  projectId: "demo2-25504",
  storageBucket: "demo2-25504.appspot.com",
  messagingSenderId: "509715071966",
  appId: "1:509715071966:web:7726ba72aba0975b9bd34f",
  measurementId: "G-RGL0NX87BE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);