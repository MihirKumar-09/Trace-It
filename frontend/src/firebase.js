import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBAcA5EOCYvqcWf44S5uBuEa9_PdVx0Zug",
  authDomain: "lost-link-780fe.firebaseapp.com",
  projectId: "lost-link-780fe",
  storageBucket: "lost-link-780fe.firebasestorage.app",
  messagingSenderId: "207177657641",
  appId: "1:207177657641:web:6ed1a5f2c32e76cf99db38",
};

// Initialize firebase;
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
