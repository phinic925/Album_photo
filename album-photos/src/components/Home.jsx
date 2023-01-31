import React from 'react';

const LandingPage = () => {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      height: "100vh"
    }}>
      <div style={{
        backgroundImage: `url(${"https://images.pexels.com/photos/2397414/pexels-photo-2397414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <p style={{color: "white", fontSize: "24px", textShadow: "2px 2px 4px black"}}>
          Description written on top of the image
        </p>
        <button style={{
          padding: "12px 24px",
          backgroundColor: "white",
          color: "black",
          borderRadius: "4px",
          boxShadow: "2px 2px 4px gray",
          marginTop: "16px"
        }}>
          Click Me
        </button>
      </div>
      <footer style={{
        backgroundColor: "lightgray",
        color: "white",
        display: "flex",
        justifyContent: "center",
        padding: "16px"
      }}>
        <p>Copyright &copy; 2023 Your Company Name</p>
      </footer>
    </div>
  );
};

export default LandingPage;
