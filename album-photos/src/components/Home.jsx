import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
const Home = () => {
  const navigate = useNavigate();
  
  return (
    <>
    <section className="sect"> 
    <div className="read">
    
        <div className="left">
            <img src="https://images.pexels.com/photos/2090881/pexels-photo-2090881.jpeg?auto=compress&cs=tinysrgb&w=600"/>

        </div>
       
        <div className="right">
            {/* <hr className="cut"/> */}
            <h1>Beautiful Memories in Pictures</h1>
            <p> Our album and photo application offers an effortless way to preserve your special moments.
             Create and customize albums to categorize your photos and relive those memories anytime.
              With intuitive navigation, you can quickly access and view your photos in high quality. 
              Plus, with the option to share your albums with friends and family, you can spread joy and reminisce together.
               Store all your precious moments in one secure place with our album and photo app.</p>
    <MDBBtn color="info" ><Link to="/register">LOGIN</Link></MDBBtn>
   

        </div>

    </div>

</section>
<MDBFooter className='text-center text-white' style={{ backgroundColor: '#0a4275' }}>
      <MDBContainer className='p-4 pb-0'>
        <section className=''>
          <p className='d-flex justify-content-center align-items-center'>
            <span className='me-3'>Login to our website</span>
            <MDBBtn type='button' outline color="light" rounded>
              Sign in!
            </MDBBtn>
          </p>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          PNP
        </a>
      </div>
    </MDBFooter>
 

</>
    
  );
};

export default Home;
