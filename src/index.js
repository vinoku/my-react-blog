import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration. These are public keys and can be committed to Github
const firebaseConfig = {
  apiKey: "AIzaSyD6yp2QLowSAf2GuxFBNXG3AHW1ncPQCVs",
  authDomain: "my-react-blog-c9df1.firebaseapp.com",
  projectId: "my-react-blog-c9df1",
  storageBucket: "my-react-blog-c9df1.appspot.com",
  messagingSenderId: "747854663868",
  appId: "1:747854663868:web:0a159301ded4728ba140b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
