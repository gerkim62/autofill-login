import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

////the old account
// const firebaseConfig = {
//   apiKey: "AIzaSyCxOxV--X-Sx-yxnak0V03hTrqzUmupl5I",
//   authDomain: "autofill-59946.firebaseapp.com",
//   projectId: "autofill-59946",
//   storageBucket: "autofill-59946.appspot.com",
//   messagingSenderId: "908136121251",
//   appId: "1:908136121251:web:98971af113c1a5759f9016",
// };

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUOgb4zriJ4pUaJw-MOrxpdR3qhj00w6E",
  authDomain: "cute-autofill.firebaseapp.com",
  projectId: "cute-autofill",
  storageBucket: "cute-autofill.appspot.com",
  messagingSenderId: "981516243328",
  appId: "1:981516243328:web:f6ea62a4da136e37557165",
  measurementId: "G-D3DCZHB7JN",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
