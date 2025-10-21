// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from "./firebaseConfig";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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