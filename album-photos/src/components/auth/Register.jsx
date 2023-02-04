import  React,{useEffect,useState}  from "react";
import jwt_decode from "jwt-decode";
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

  // import { Link, useNavigate } from "react-router-dom";
// import { auth, signInWithEmailAndPassword, signInWithGoogle } from "./firebase";
// import { useAuthState } from "react-firebase-hooks/auth";
  

function Register() {
  const[user,setUser] = useState({});
  const [isSignedIn, setIsSignedIn] = useState(false)
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [user, loading, error] = useAuthState(auth);
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (loading) {
  //     alert(6)
     
  //     return;
  //   }
  //   if (user) navigate("/users");
  // }, [user, loading]);
  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential)
    var userObject = jwt_decode(response.credential);
    console.log(userObject)
    setUser(userObject)
    
   }
  // const initializeGsi = () => {
  //           google.accounts.id.initialize({
  //               client_id: '994111349583-j4paaeqjf3kq18ehhv5gipkbpk66urjp.apps.googleusercontent.com',
  //           });
  //           google.accounts.id.prompt(notification => {
  //               console.log(notification)
  //           });
  //    }

  useEffect(()=> {
    google.accounts.id.initialize({
      client_id:"579736159954-mh3hna4gq78td46q3umgj6bg40bkvfar.apps.googleusercontent.com",
      callback: handleCallbackResponse

    })
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
    )
  }, [])
  // useEffect(() => {
  //          const script = document.createElement('script')
  //           script.src = 'https://accounts.google.com/gsi/client'
  //           script.onload = initializeGSI()
  //           script.async = true;
    
  //           document.querySelector('body').appendChild(script)
  //       }, [])
    return(
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
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                 />
                 <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="formControlLg"
                  type="password"
                  size="lg"
                  // value={password}
                  // onChange={(e) => setPassword(e.target.value)}
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
                  style={{ backgroundColor: "#dd4b39" }}
                >
               <MDBIcon className="mx-2" id="signInDiv"/>
              
               sign in with Google
                </MDBBtn>
         
  
                <MDBBtn
                  className="mb-4 w-100"
                  size="lg"
                  style={{ backgroundColor: "#3b5998" }}
                >
                  <MDBIcon fab icon="facebook-f" className="mx-2"/>
                  Sign in with facebook
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

    )
    
}
export default Register;