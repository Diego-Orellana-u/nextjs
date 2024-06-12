import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9qP0aW7FNO-iLlcdlny6QU1iuQYvgO90",
  authDomain: "prueba1-88a43.firebaseapp.com",
  projectId: "prueba1-88a43",
  storageBucket: "prueba1-88a43.appspot.com",
  messagingSenderId: "615722271454",
  appId: "1:615722271454:web:d97fc6fd88ed6a2b09384f",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
