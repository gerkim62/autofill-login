import { onAuthStateChanged } from "firebase/auth";

import { loginWithGoogle } from "./utils.js";

import { auth } from "./firebaseConfig.js";

import { loginWithGoogleButton, loginMessage, logoutButton } from "./dom.js";

onAuthStateChanged(auth, async (user) => {
  console.log(JSON.stringify(user));
  if (user) {
    //user is signed in.
    // alert("logged in as " + user.displayName + "");
    loginMessage.innerHTML = `Hi ${user.displayName}! <br />
    You can now use Autofill.`;
    loginWithGoogleButton.style.display = "none";
    logoutButton.style.display = "inline-block";
  } else {
    // User is signed out
    // alert("logged out");
    logoutButton.style.display = "none";
    loginWithGoogleButton.style.display = "inline-block";
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
