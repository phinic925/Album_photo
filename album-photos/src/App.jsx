import "./App.css";
import Navbar from "./components/Navbar";
// import Album from "./components/Album";
// import Register from "./components/auth/Register";

import User from "./components/users";
import Home from "./components/Home";
import Album from "./components/Album";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from 'react-router-dom';
import Register from "./components/auth/Register";
import UserInformation from "./components/userInformation/UserInformation";
import Photo from "./components/photo/Photo";


function App() {
  return (
    <Router>
    <div className="App">
        <Navbar/>
      <Routes>
      <Route exact path="/" element={<Photo/>} />
      <Route exact path="/users" element={<User />} />
      <Route exact path="/albums" element={<Album />} />
      <Route exact path="/photos" element={<UserInformation />} />
    

      </Routes>
    
      {/* <Register /> */}
     
     
    </div>
    </Router>
  );
}

export default App;