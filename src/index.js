import { onAuthStateChanged } from "firebase/auth";

import { loginWithGoogle, logout } from "./utils.js";

import { auth } from "./firebaseConfig.js";

import {
  loginWithGoogleButton,
  loginMessage,
  logoutButton,
  authChangesAnnouncer,
} from "./dom.js";

onAuthStateChanged(auth, async (user) => {
  //this mutation will trigger the mutation then our extension will run to check the auth state
  authChangesAnnouncer.setAttribute("data-has-changed", "true");

  //wait for the mutation to be observed then set it back to false
  setTimeout(() => {
    authChangesAnnouncer.setAttribute("data-has-changed", "false");
  }, 10);

  //save user to local storage
  localStorage.setItem("user", JSON.stringify(user));

  if (user) {
    //user is signed in.
    // alert("logged in as " + user.displayName + "");
    loginMessage.innerHTML = `Hi ${user.displayName}! <br /> You are logged in. <br />
    When you have a quiz on eLearning, answers will appear. `;
    loginWithGoogleButton.style.display = "none";
    logoutButton.style.display = "inline-block";
  } else {
    // User is signed out
    // alert("logged out");
    loginMessage.innerHTML = `Hi there! <br /> Please log in to start using Autofill.`;
    logoutButton.style.display = "none";
    loginWithGoogleButton.style.display = "inline-block";
  }

  const action = getActionFromQueryString();
  if (action === "login" && !user) {
    loginWithGoogleButton.click();
  } else if (action === "logout" && user) {
    logoutButton.click();
  }

  console.log(JSON.stringify(user));
});

//event listeners
loginWithGoogleButton.addEventListener("click", async (e) => {
  loginWithGoogleButton.disabled = true;
  // loginWithGoogleButton.innerText = "Logging in...";
  const { user, error } = await loginWithGoogle();
  // alert("logging in " + user);
  if (error) {
    alert(
      "An unexpected error has occured. Please reload this page to try logging in again. If the error persists, contact the Autofill developer. \n \n " +
        error.replace("auth/", "")
    );
  }

  loginWithGoogleButton.disabled = false;
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
      "Hi there!<br/>You are not logged in. <br /> Please login to use Autofill.";
  }
});

function getActionFromQueryString() {
  const urlParams = new URLSearchParams(window.location.search);
  const action = urlParams.get("action");
  return action;
}
