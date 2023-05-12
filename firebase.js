import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDiJKL8FnMhmcpfjRs1QqzA6waDUB_L7Hs",
  authDomain: "react-notes-app-c55f6.firebaseapp.com",
  projectId: "react-notes-app-c55f6",
  storageBucket: "react-notes-app-c55f6.appspot.com",
  messagingSenderId: "11684715728",
  appId: "1:11684715728:web:3b0b28ed0e82f7143192d5"
}

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
