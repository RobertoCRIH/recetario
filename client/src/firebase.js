// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHls-QH-TH44MQGCemSwSdRWl5okomdq4",
  authDomain: "soa-react.firebaseapp.com",
  projectId: "soa-react",
  storageBucket: "soa-react.appspot.com",
  messagingSenderId: "756712898466",
  appId: "1:756712898466:web:0626b332ca2f61bde97cfb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

