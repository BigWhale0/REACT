import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDy6_gjPjfazH3tdvPzRp8_E8yF8zqgVfA",
  authDomain: "chat-d773c.firebaseapp.com",
  projectId: "chat-d773c",
  storageBucket: "chat-d773c.appspot.com",
  messagingSenderId: "1085722498661",
  appId: "1:1085722498661:web:fda0d70b79f3eb89d9188c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()