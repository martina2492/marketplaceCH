// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQBBoYB-4FkH1j4y9AsMq6LjLH5uYxAs8",
  authDomain: "fir-auth-f36c1.firebaseapp.com",
  projectId: "fir-auth-f36c1",
  storageBucket: "fir-auth-f36c1.appspot.com",
  messagingSenderId: "1006113627131",
  appId: "1:1006113627131:web:3d92e157b953dfe1d1895e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;