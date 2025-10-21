// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, push } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnIH3sUKL0U5zWCsyd7X56Hkds6tLO76U",
  authDomain: "fir-5105b.firebaseapp.com",
  databaseURL: "https://fir-5105b-default-rtdb.firebaseio.com/",
  projectId: "fir-5105b",
  storageBucket: "fir-5105b.firebasestorage.app",
  messagingSenderId: "764065034501",
  appId: "1:764065034501:web:74174067eab2c5242fc76c",
  measurementId: "G-WP1SRHE9Z8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function writeUserData(book) {
  const db = getDatabase(app);
  set(ref(db, 'booklist/' + book), {
    book
  })
  .then(()=>console.log("Added new book", book))
  .catch((error)=> console.log("Push failed", error));
}



console.log(analytics);

const inputFieldEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");

addButtonEl.addEventListener("click", function(){
    let inputValue = inputFieldEl.value;
    writeUserData(inputValue);
    console.log(inputValue);
});