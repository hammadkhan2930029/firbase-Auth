import { getAuth,signOut , onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getFirestore , getDatabase,doc, setDoc , ref , set ,child, update,remove} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";



  const firebaseConfig = {
    apiKey: "AIzaSyAZT8WeEJcHEuj9Yn7iu5Qzf5NVFs9XU9Y",
    authDomain: "test-da73d.firebaseapp.com",
    projectId: "test-da73d",
    storageBucket: "test-da73d.appspot.com",
    messagingSenderId: "807758052932",
    appId: "1:807758052932:web:b96b300bda9761e2c0c611",
    measurementId: "G-JLKWY5NQD2"
  };
  
  // Initialize Firebase

  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const db = getFirestore(app);


  // ---------sign Out----------

let signout = document.getElementById("signOut")
console.log(signout)
if(signout){
signout.addEventListener("click" , () =>{
  signOut(auth).then(() => {
    window.location.replace("login.html")
    
  }).catch((error) => {
    console.log(error)
  });
})
}




onAuthStateChanged(auth,  (user) => {
  console.log(user)
  if (user) {
    if(location.pathname !== "/dashboard.html"){

      window.location.replace("dashboard.html")
    }
  }else{
    if(location.pathname !== "/login.html"){

      window.location.replace("login.html")
    }      
  }
});



// -------chat App--------------

let userInput = document.getElementById("userInput")
let btn = document.getElementById("btn")


