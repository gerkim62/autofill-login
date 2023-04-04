import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCxOxV--X-Sx-yxnak0V03hTrqzUmupl5I",
  authDomain: "autofill-59946.firebaseapp.com",
  projectId: "autofill-59946",
  storageBucket: "autofill-59946.appspot.com",
  messagingSenderId: "908136121251",
  appId: "1:908136121251:web:98971af113c1a5759f9016",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
