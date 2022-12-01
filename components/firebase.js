// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyCcc2q-PWbGVo9EgRo8C4RZGECJvev9zt4",
    authDomain: "feelinpinas.firebaseapp.com",
    projectId: "feelinpinas",
    storageBucket: "feelinpinas.appspot.com",
    messagingSenderId: "858879821639",
    appId: "1:858879821639:web:6c0c6f2a31e406ce056e62",
    measurementId: "G-T0X216Z6B6"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;