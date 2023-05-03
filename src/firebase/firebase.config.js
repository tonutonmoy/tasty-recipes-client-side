// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration



const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;




// apiKey: "AIzaSyByav8KzhMUVd4TfNhDR_wIcvtJW0KfG6s",
// authDomain: "tasty-recipes-3afce.firebaseapp.com",
// projectId: "tasty-recipes-3afce",
// storageBucket: "tasty-recipes-3afce.appspot.com",
// messagingSenderId: "663926573799",
// appId: "1:663926573799:web:93684841991255722bb042"