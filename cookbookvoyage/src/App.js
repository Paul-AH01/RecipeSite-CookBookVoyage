import React from "react";
import "./App.css";
import NavBar from "./Components/Navbar.js";
import cake from './images/cake.png';

function App() {
  return (
    <div className="App">
      <div className="top-background">
        <h1 className="top-background-text">Cook Book Voyage</h1>
      </div>
      {/* <div className="nav-bar">
        <NavBar />
      </div> */}

      <div className="navbar">
       <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#profile">Profile</a></li>
        <li><a href="#recipes">Recipes</a></li>
        <li><a href="#popular">Popular</a></li>
       </ul>
      </div>

      <div className="recipe-card-container">
        <div className="recipe-card">
          <div className="recipe-card-image">
            {/* <img src={cake} alt="this is cake" /> */}
            <div className="recipe-card-title">
              
              Cake
            </div>
          </div>
        </div>
      </div>
      <div className="recipe-card-container">
        <div className="recipe-card">
          <div className="recipe-card-image">
            <div className="recipe-card-title">
              <img src="cake.png" alt="" />
              Cake
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
