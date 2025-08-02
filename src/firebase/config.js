// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAtCao_aPav1HA1lKspVms72k_d2lwq9MI",
  authDomain: "todopro-3ede5.firebaseapp.com",
  projectId: "todopro-3ede5",
  storageBucket: "todopro-3ede5.firebasestorage.app",
  messagingSenderId: "249508731913",
  appId: "1:249508731913:web:de7e3fd7855f6656672cd8",
  measurementId: "G-MBX26TZXC6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export { app, analytics, db };
export default app;