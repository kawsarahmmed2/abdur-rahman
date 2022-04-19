// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpycbeMDSG22MK1E2hEQqaBL2PRBjx_mo",
  authDomain: "travel-115f2.firebaseapp.com",
  projectId: "travel-115f2",
  storageBucket: "travel-115f2.appspot.com",
  messagingSenderId: "970660264892",
  appId: "1:970660264892:web:0091e093ae6881bce549b9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
