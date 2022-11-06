import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyA2dP4wUx3I5gRm7_KeLTeo0ZkRWIf70SA",
  authDomain: "auth-1caaf.firebaseapp.com",
  projectId: "auth-1caaf",
  storageBucket: "auth-1caaf.appspot.com",
  messagingSenderId: "584129047860",
  appId: "1:584129047860:web:1be4317c0de9af5a484961",
  measurementId: "G-7SE8FZ92B7"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);