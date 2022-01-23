import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD1uq3xE_W-OsXwA_jHLgkZjhognbEBn7w",
  authDomain: "whatsapp-clone-react-a3bba.firebaseapp.com",
  projectId: "whatsapp-clone-react-a3bba",
  storageBucket: "whatsapp-clone-react-a3bba.appspot.com",
  messagingSenderId: "296175928440",
  appId: "1:296175928440:web:b4692a80ea15d8c320198d",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;
