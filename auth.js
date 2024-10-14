// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

// Firebase configuration (replace with your config)
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

// Protect page content by checking the authentication state
window.onload = () => {
  // Hide content by default until auth state is confirmed
  document.body.style.display = 'none';

  // Check authentication state
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is authenticated, show the content
      document.body.style.display = 'block';
    } else {
      // User is not authenticated, redirect to login page
      window.location.href = 'index.html'; // Redirect to the login page
    }
  });
};
