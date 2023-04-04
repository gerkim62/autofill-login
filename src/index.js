import { onAuthStateChanged } from "firebase/auth";

import { loginWithGoogle, logout } from "./utils.js";

import { auth } from "./firebaseConfig.js";

import { loginWithGoogleButton, loginMessage, logoutButton } from "./dom.js";

onAuthStateChanged(auth, async (user) => {
  console.log(JSON.stringify(user));
  if (user) {
    //user is signed in.
    // alert("logged in as " + user.displayName + "");
    loginMessage.innerHTML = `Hi ${user.displayName}! <br /> You are logged in. <br />
    You can now use Autofill. `;
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

logoutButton.addEventListener("click", async (e) => {
  logoutButton.disabled = true;
  // logoutButton.innerText = "Logging out...";
  const { error } = await logout();
  if (error) {
    
    alert(
      "An unexpected error has occured. Please reload this page to try logging out again. If the error persists, contact the Autofill developer. \n \n " +
        error.replace("auth/", "")
    );
  } else {
    logoutButton.disabled = false;
    // logoutButton.innerText = "Logout";
    logoutButton.style.display = "none";
    loginWithGoogleButton.style.display = "inline-block";
    loginMessage.innerHTML =
      "You are not logged in. <br /> Please login to use Autofill.";
  }
});

// alert("success!");
