// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTJ85E355a1GXsgypL7ejdFYObztFZmcE",
  authDomain: "moverstaxi-68b7f.firebaseapp.com",
  projectId: "moverstaxi-68b7f",
  storageBucket: "moverstaxi-68b7f.appspot.com",
  messagingSenderId: "277115224618",
  appId: "1:277115224618:web:ca35304248b6ba42f73953",
  measurementId: "G-74T607VQCE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Get the submit button and add event listener
const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form from submitting

    // Get input values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Firebase Authentication: Create a new user with email and password
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        window.location.href ="dashbord.html";
      })
      .catch((error) => {
        // Handle errors here
        const errorMessage = error.message;
        alert("Wrong Password");
      });
});
