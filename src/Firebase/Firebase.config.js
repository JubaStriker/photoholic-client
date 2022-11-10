// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAVcxVFSEFMlk8P5iUGXr7jk7eaU1E0gP8",
    authDomain: "photoholic-d6cec.firebaseapp.com",
    projectId: "photoholic-d6cec",
    storageBucket: "photoholic-d6cec.appspot.com",
    messagingSenderId: "491524491068",
    appId: "1:491524491068:web:5857569c5b561ac845c039"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;