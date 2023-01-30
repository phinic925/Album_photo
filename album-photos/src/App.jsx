import "./App.css";
import Navbar from "./components/Navbar";
// import Album from "./components/Album";
// import Register from "./components/auth/Register";
// import Home from "./components/Home";
import User from "./components/users";
import Home from "./components/Home";
import Album from "./components/Album";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from 'react-router-dom';
import Register from "./components/auth/Register";


function App() {
  return (
    <Router>
    <div className="App">
        <Navbar/>
      <Routes>
      <Route exact path="/" element={<Register />} />
      <Route exact path="/users" element={<User />} />
      <Route exact path="/albums" element={<Album />} />
    

      </Routes>
    
      {/* <Register /> */}
     
     
    </div>
    </Router>
  );
}

export default App;