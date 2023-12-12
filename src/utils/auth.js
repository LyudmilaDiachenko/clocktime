import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCe7aUGEYPkZWfRRnCEquPGqYggyL5veFg",
  authDomain: "clocktime-b565f.firebaseapp.com",
  projectId: "clocktime-b565f",
  storageBucket: "clocktime-b565f.appspot.com",
  messagingSenderId: "310863257455",
  appId: "1:310863257455:web:20bd0a440578bef9ec529a",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const loginBtn = document.querySelector("#login-btn");
const logoutBtn = document.querySelector("#logout-btn");

auth.onAuthStateChanged((user) => {
  if (user) {
    const saveUserData = localStorage.getItem("user");
    if (saveUserData) {
      userData = JSON.parse(saveUserData);
    }
    loginBtn.style.display = "none";
    logoutBtn.style.display = "block";
  } else {
    loginBtn.style.display = "block";
    logoutBtn.style.display = "none";
  }
});
loginBtn.addEventListener("click", (e) => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log("Login User", user);
      localStorage.setItem("user", JSON.stringify(user));
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log("Error login", errorMessage);
    });
});
logoutBtn.addEventListener("click", (e) => {
  signOut(auth)
    .then(() => {
      localStorage.removeItem("user");
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
});
