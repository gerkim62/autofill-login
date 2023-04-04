import { onAuthStateChanged } from "firebase/auth";

import { loginWithGoogle } from "./utils.js";

import { auth } from "./firebaseConfig.js";

import { loginWithGoogleButton } from "./dom.js";

onAuthStateChanged(auth, async (user) => {
  console.log(user);
  if (user) {
    //user is signed in.
    // alert();
  } else {
    // User is signed out
  }
});

//event listeners
loginWithGoogleButton.addEventListener("click", async (e) => {
  const { user, error } = await loginWithGoogle();
  // alert("logging in " + user);
  console.log(user, error);
});

// alert("success!");
