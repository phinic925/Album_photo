
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
import { Link, useNavigate } from 'react-router-dom';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput,
  } from "mdb-react-ui-kit";
export default function Login (){
    const[user, setUser] = useState({});
    const navigate= useNavigate();
    function handleCallbackResponse(response) {
       console.log("Encoded JWT ID token: " + response.credential) 
       var user = jwt_decode(response.credential);
       console.log(user);
       setUser(user)
       if (user.email_verified) {
        navigate('/users')
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
             <MDBContainer className="my-5">
        <MDBCard>
          <MDBRow className="g-0">
            <MDBCol md="6">
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
                alt="login form"
                className="rounded-start w-100"
              />
            </MDBCol>
  
            <MDBCol md="6">
              <MDBCardBody className="d-flex flex-column">
                <div className="d-flex flex-row mt-2 justify-content-center">
                  <MDBIcon
                    fas
                    icon="cubes fa-3x me-3"
                    style={{ color: "#ff6219" }}
                  />
                  {/* <span className="h1 fw-bold mb-0">Logo</span> */}
                </div>
  
                <h5
                  className="fw-normal my-4 pb-3"
                  style={{ letterSpacing: "1px" }}
                >
                  Sign into your account
                </h5>
  
                  <MDBInput
                  wrapperClass="mb-4"
                  label="Email address"
                  id="formControlLg"
                  type="email"
                  size="lg"
                 
                 />
                 <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="formControlLg"
                  type="password"
                  size="lg"
                 
                />
  
                <MDBBtn className="mb-4 px-5" color="dark" size="lg" >
                
                  Login
                </MDBBtn> 
   
                <div className="divider d-flex align-items-center justify-content-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">OR</p>
                </div>
                <MDBBtn
                  className="mb-2 w-100"
                  size="lg"
                  style={{ backgroundColor: "#dd4b39" }}>
               
                <div id="signInDiv"></div>
                 </MDBBtn>
         
               <div className="d-flex flex-row justify-content-start">
                  <a href="#!" className="small text-muted me-1">
                    Terms of use.
                  </a>
                  <a href="#!" className="small text-muted">
                    Privacy policy
                  </a>
                </div>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
           
        </div>
    )


}
