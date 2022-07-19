import React, {useRef} from 'react';
import '../firebaseconfig';
import {db} from '../firebaseconfig';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

function Register() {
    const useremailRef = useRef();
    const userpasswordRef = useRef();

    function SignUpUser() {
       const email = useremailRef.current.value ;
       const password =userpasswordRef.current.value;

       //run firebase stuff here
       const auth = getAuth();
       createUserWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
           // Signed in 
           const user = userCredential.user;
           // ...
           console.log(user)
           console.log("user created")
         })
         .catch((error) => {
           const errorCode = error.code;
           const errorMessage = error.message;

           console.log(errorCode)
           console.log(errorMessage)
           // ..
         });
    }

    return (
        <div>
            <h1> Register</h1>
            <input type="text" placeholder='Enter your username' /><br></br><br></br>

            <input type="password" placeholder='Enter your password' ref={userpasswordRef} /><br></br><br></br>
            <input type="email"  placeholder='Enter your email' ref={useremailRef} /><br></br><br></br>
            <button onClick={SignUpUser}>Submit</button>


            <p>Already have an account?<Link to ="/">Sign in</Link> </p>
        </div>
    )
}

export default Register