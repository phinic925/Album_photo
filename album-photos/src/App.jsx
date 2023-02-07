import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import User from "./components/users";
import Home from "./components/Home";
import Album from "./components/Album";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from 'react-router-dom';
import UserInformation from "./components/userInformation/UserInformation";
import Photo from "./components/photo/Photo";
import Login from "./components/auth/login";


function App() {
  return (
    <Router>
     
    <div className="App">
        <Navbar/>
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/users" element={<User />} />
      <Route exact path="/albums" element={<Album />} />
      <Route exact path="/photos" element={<Photo />} />
      <Route exact path="/userinformation" element={<UserInformation />} />
      <Route exact path="/register" element={<Login/>} />
    

      </Routes>
    
      
     
     
    </div>
   
    </Router>
  );
}

export default App;