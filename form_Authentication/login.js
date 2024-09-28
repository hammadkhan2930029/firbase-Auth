import { getAuth, signInWithEmailAndPassword , onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getFirestore ,doc, setDoc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";


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

  
  // ------------login------

let email1 = document.getElementById("email1")
let password1 = document.getElementById("password1")
let loginBtn = document.getElementById("loginBtn")
let emailRegx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

if(loginBtn){

  loginBtn.addEventListener("click",() =>{
    event.preventDefault()
    if(email1.value.trim() == ""){
      alert("empty email field")
    }
    else if(!emailRegx.test(email1.value)){
      alert("Invalid email")
    }
    else if(password1.value.trim() == ""){
      alert("empty password field")
    }
    else{
      
          signInWithEmailAndPassword(auth, email1.value, password1.value)
          .then((userCredential) => {
            // Signed in 
            console.log(email1.value)
            console.log(password1.value)

            const user = userCredential.user;
            console.log("login ho gaya")
            window.location.replace("dashboard.html")

            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
          });
        }
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
  
