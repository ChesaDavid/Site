
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmY0Pq-IeS8O4DvmKB6BjzxzdAEOPwtPs",
  authDomain: "tm-discovery.firebaseapp.com",
  projectId: "tm-discovery",
  storageBucket: "tm-discovery.appspot.com",
  messagingSenderId: "530538223173",
  appId: "1:530538223173:web:688a9d8039cd7ddf5af52c",
  measurementId: "G-PRTZ79X39V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
