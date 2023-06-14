// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuSPMCow6XMPyIdadKjCOVK02zS46Obpk",
  authDomain: "etheria-eatery.firebaseapp.com",
  projectId: "etheria-eatery",
  storageBucket: "etheria-eatery.appspot.com",
  messagingSenderId: "30456786820",
  appId: "1:30456786820:web:2eadca937b138ab973f7d1",
  measurementId: "G-9P40Y7QT82",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
