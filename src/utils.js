import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { auth } from "./firebaseConfig.js";

async function loginWithGoogle() {
  const provider = new GoogleAuthProvider();
  try {
    const userCredential = await signInWithPopup(auth, provider);
    return { user: userCredential.user };
  } catch (error) {
    const errorCode = error.code;

    return { error: errorCode };
  }
}

export { loginWithGoogle };

// import { getAuth, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

// import { auth } from "./firebaseConfig.js";

// async function loginWithGoogle() {
//   const provider = new GoogleAuthProvider();
//   try {
//     // const auth = getAuth();
//     await signInWithRedirect(auth, provider);
//   } catch (error) {
//     const errorCode = error.code;
//     console.log(error);
//     return { error: errorCode };
//   }
// }

// export { loginWithGoogle };
