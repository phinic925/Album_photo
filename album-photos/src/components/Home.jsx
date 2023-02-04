import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Home = () => {
  const navigate = useNavigate();
  const SocialIcons = () => (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', width:'100%' }}>
      <a href="#">
        <h5> find us on </h5>
        <FaFacebook size={30} />
      </a>
      <a href="#">
        <FaTwitter size={30} />
      </a>
      <a href="#">
        <FaInstagram size={30} />
      </a>
    </div>
  );
  return (
    <>
    <section className="sect"> 
    <div className="read">
    
        <div className="left">
            <img src="https://images.pexels.com/photos/746386/pexels-photo-746386.jpeg?auto=compress&cs=tinysrgb&w=600"/>

        </div>
       
        <div className="right">
            <hr className="cut"/>
            <h1> Cut the Hustle </h1>
            <p> In this current tough economic<br/>
            situations, living is already a hustle.<br/>
        Why then should you worry about<br/> how you should 
    move to live better?</p>
    <button><Link to="/register">LOGIN</Link></button>
   

        </div>

    </div>

</section>
<footer style={{ backgroundColor: 'black', padding: '20px' }}>
    <SocialIcons />
    <p style={{ textAlign: 'center', margin: 0 }}>
      Copyright &copy; {new Date().getFullYear()}
    </p>
  </footer>
</>
    
  );
};

export default Home;
