import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";


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



// --------sign Up-----------

let firstLastName = document.getElementById("firstLastName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let mobile = document.getElementById("mobile");
let signBtn = document.getElementById("signBtn");
let emailRegx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/





signBtn.addEventListener("click", () => {
  event.preventDefault()
if(firstLastName.value.trim() == ""){
  swal({
    title: "Empty First and last Name field",
    text: "",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  
}
else if (mobile.value.trim() == ""){
  swal({
    title: "Empty mobile number field",
    text: "",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  

}
else if(mobile.value.length < 11){
  swal({
    title: "Mobile No is to short",
    text: "",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  
}

else if(email.value.trim() == ""){
  swal({
    title: "Empty Email field",
    text: "",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  
}
else if(!emailRegx.test(email.value)){
  swal({
    title: "Invalid Emial",
    text: "",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
 
}
else if(password.value.trim() == ""){
  swal({
    title: "Empty password field",
    text: "",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
 
}
else if(password.value.length < 6){
  swal({
    title: "password is too Short",
    text: "",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  
}
else{
  
  createUserWithEmailAndPassword(auth, email.value, password.value)
                .then(async (userCredential) => {
                  window.location.replace("login.html")

                    const user = userCredential.user;
                    await setDoc(doc(db, "users", user.uid), {
                        FirstName: firstLastName.value,
                      
                        email: email.value,
                        password: password.value,
                    });

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      swal(errorMessage)
    
    });
  }

});





