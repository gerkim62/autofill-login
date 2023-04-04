import { onAuthStateChanged } from "firebase/auth";

import { loginWithGoogle } from "./utils.js";

import { auth } from "./firebaseConfig.js";

import { loginWithGoogleButton } from "./dom.js";

onAuthStateChanged(auth, async (user) => {
  console.log(JSON.stringify(user));
  if (user) {
    //user is signed in.
    alert("logged in as " + user.displayName + "");
  } else {
    // User is signed out
    alert("logged out");
  }
});

//event listeners
loginWithGoogleButton.addEventListener("click", async (e) => {
  loginWithGoogleButton.disabled = true;
  loginWithGoogleButton.innerText = "Logging in...";
  const { user, error } = await loginWithGoogle();
  // alert("logging in " + user);
  if (error) {
    alert(
      "An unexpected error has occured. Please reload this page to try logging in again. If the error persists, contact the Autofill developer. \n \n " +
        error.replace("auth/", "")
    );
  }
});

// alert("success!");
