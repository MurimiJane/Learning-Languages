import React, { useRef } from 'react';
import '../firebaseconfig';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();

  const useremailRef = useRef();
  const userpasswordRef = useRef();

  function SignInUser() {
    const email = useremailRef.current.value;
    const password = userpasswordRef.current.value;

    //run firebase stuff here
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        console.log("successful login")
        navigate("profile")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  return (
    <div>
      <h1> Login</h1>
      <input type="text" placeholder='Enter your email' ref={userpasswordRef} /><br></br>
      <input type="password" placeholder='Enter your password' ref={useremailRef} /><br></br>
      <button onClick={SignInUser}>Log In</button>

      <p>Don't have an account?<Link to="register">Sign up</Link> </p>
    </div>
  )
}

export default Login