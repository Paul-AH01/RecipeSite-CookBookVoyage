import React from "react";
import "./App.css";
import NavBar from "./components/Navbar.js";

function App() {
  return (
    <div className="App">
      <div className="top-background">
        <h1 className="top-background-text">Cook Book Voyage</h1>
      </div>
      <div className="nav-bar">
        <NavBar />
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
