import React from 'react'
import '../firebaseconfig';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";


function Profile() {

    let navigate = useNavigate();

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            const userEmail = user.email;
            // ...
            console.log(uid);
            console.log(userEmail)
        } else {
            // User is signed out
            // ...
        }
    });


    function signOutUser() {
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/")
        }).catch((error) => {
            // An error happened.
        });
    }


    return (
        <div>
            <h1>profile</h1>
            <button onClick={signOutUser}>Logout</button>

        </div>
    )
}

export default Profile