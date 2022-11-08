// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

    //   apiKey: "AIzaSyA8dqhl1zlZ2Ien-jhcy8-nhHPjy1Nreu0",
    //   authDomain: "kids-camp-ef82e.firebaseapp.com",
    //   projectId: "kids-camp-ef82e",
    //   storageBucket: "kids-camp-ef82e.appspot.com",
    //   messagingSenderId: "104712885511",
    //   appId: "1:104712885511:web:5e88805148ffb0263a61a2"