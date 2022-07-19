// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLHGPaJtlcVfBqSUW4Vz2-5V-4-ZRMsBc",
  authDomain: "facebook-clone-f07b9.firebaseapp.com",
  projectId: "facebook-clone-f07b9",
  storageBucket: "facebook-clone-f07b9.appspot.com",
  messagingSenderId: "274698679490",
  appId: "1:274698679490:web:add0d2d1d481abdb56775b",
  measurementId: "G-75ZLES892W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getStorage();

export {app};
export {analytics};
export {db};