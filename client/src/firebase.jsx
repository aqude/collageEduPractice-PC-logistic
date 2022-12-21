import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBfIJKIxSJJab-B79eLbatk6-wpH0o7c4k",
    authDomain: "logistic-react.firebaseapp.com",
    projectId: "logistic-react",
    storageBucket: "logistic-react.appspot.com",
    messagingSenderId: "826896563521",
    appId: "1:826896563521:web:2cda487138f20dbd1b35c0",
    measurementId: "G-D9M8YTY20X"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);