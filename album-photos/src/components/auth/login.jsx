
// import { initializeApp } from 'firebase/app';
// import 'firebase/auth';

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const firebaseConfig = {
//     apiKey: "AIzaSyDNQYFH45f8Kb579CRAegXsdm27MRkKlE0",
//     authDomain: "album-photos-41c5c.firebaseapp.com",
//     projectId: "album-photos-41c5c",
//     storageBucket: "album-photos-41c5c.appspot.com",
//     messagingSenderId: "116487814331",
//     appId: "1:116487814331:web:650a18169c034de081fd9e",
//     measurementId: "G-ZG9WVBGE9Q"
//   };
// const app = initializeApp(firebaseConfig);


// const SignIn = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleSignIn = async () => {
//     try {
//       await  FirebaseApp.auth().signInWithEmailAndPassword(email, password);
//       navigate('/users');
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div>
//       <input
//         type="email"
//         value={email}
//         onChange={e => setEmail(e.target.value)}
//         placeholder="Email"
//       />
//       <input
//         type="password"
//         value={password}
//         onChange={e => setPassword(e.target.value)}
//         placeholder="Password"
//       />
//       <button onClick={handleSignIn}>Sign In</button>
//       {error && <p>{error}</p>}
//     </div>
//   );
// };

// export default SignIn;
// import React, { useEffect } from 'react';
// import gapi from 'gapi-script'
//  import {GoogleLogin} from 'react-google-login';
//  const clientId = "994111349583-pt8u5odl7vcua3bg2kkosbqf5pj95s5i.apps.googleusercontent.com";
//  function Login () {
//     useEffect(()=>{
//         function start(){
//         gapi.client.init({
//             clientId: clientId,
//             scope: ""
//         }) 
//         }
//         gapi.load('client:auth2', start)
//     })
//     const onSuccess = (response) => {
//         console.log("LOGIN SUCCESS! Current user: " + response.profileobj)
//     }
//     const onFailure = (response) => {
//         console.log("LOGIN Failed! Current res: " , response)   
//     }
//     return(
//         <>
//         <GoogleLogin
//         clientId={clientId}
//         buttonText='login'
//         onSuccess={onSuccess}
//         onFailure={onFailure}
//         cookiePolicy={'single_host_origin'}
//         isSignedIn={true}


//         />
//         </>
//     )


//  }
//  export default Login;
import  React, { useEffect, useState }  from "react";
import jwt_decode from 'jwt-decode'; 
export default function Login (){
    const[user, setUser] = useState({});
    function handleCallbackResponse(response) {
       console.log("Encoded JWT ID token: " + response.credential) 
       var user = jwt_decode(response.credential);
       console.log(user);
       setUser(user)
       if (response.email_verified === "true") {
        setIsSignedIn(true);
        navigateTo('/users')
      }
    }
    useEffect(()=>{
        google.accounts.id.initialize({
            client_id: "994111349583-pt8u5odl7vcua3bg2kkosbqf5pj95s5i.apps.googleusercontent.com",
            callback: handleCallbackResponse
        })
        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            {theme: "outline", size: "large"}
        );
    }, [])
    return(
        <div>
            <div id="signInDiv"></div>
           
        </div>
    )


}
