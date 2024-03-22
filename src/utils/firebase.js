import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFunctions } from "firebase/functions";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig =  {
    apiKey: "AIzaSyBk_WqKQCd9SP39rqI8XSFWmsaNqxu3AtA",
    authDomain: "dasparfum-e06ae.firebaseapp.com",
    projectId: "dasparfum-e06ae",
    storageBucket: "dasparfum-e06ae.appspot.com",
    messagingSenderId: "352920630111",
    appId: "1:352920630111:web:7a40a92d632d267cad7cea",
    measurementId: "G-PWW5440LDN"
  };

export const firebaseApp = initializeApp(firebaseConfig);
export const storage = getStorage();
export const db = getDatabase();
export const auth = getAuth(firebaseApp);
export const functions = getFunctions(firebaseApp, "asia-northeast1");
//export const functions = getFunctions(firebaseApp);
