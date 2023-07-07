import React from "react";
import "./App.css";
import NavBar from "./Components/Navbar.js";
import cake from "./images/cake.png";


function App() {
  return (
    <div className="App">
      <div className="top-background"> 
        <h1 className="top-background-text">Cook Book Voyage</h1>
      </div>
      
      {/* below is the code for the navbar using the ul and li tags */}
      <div className="navbar">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#profile">Profile</a>
          </li>
          <li>
            <a href="#recipes">Recipes</a>
          </li>
          <li>
            <a href="#popular">Popular</a>
          </li>
        </ul>
      {/* below is the code for the search bar using the input and button tags  */}
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button type="submit">Go</button>
        </div>
      </div>
      
      {/* These contain the recipe thumbnails */}
      <div className="recipe-card-overview">
        <div className="recipe-card-container">
          <div className="recipe-card">
            <div className="recipe-card-image">
              <div className="recipe-card-title">Toast with Blueberries</div>
              <div className="cookingtime"> </div>
            </div>
          </div>
        </div>
        <div className="recipe-card-container">
          <div className="recipe-card">
            <div className="recipe-card-image">
              <div className="recipe-card-title">Blackberry Popsicle</div>
              <div className="cookingtime"> </div>
            </div>
          </div>
        </div>
        <div className="recipe-card-container">
          <div className="recipe-card">
            <div className="recipe-card-image">
              <div className="recipe-card-title">Stacked Burger</div>
              <div className="cookingtime"> </div>
            </div>
          </div>
        </div>
        <div className="recipe-card-container">
          <div className="recipe-card">
            <div className="recipe-card-image">
              <div className="recipe-card-title">Shrimp Noodles</div>
              <div className="cookingtime"> </div>
            </div>
          </div>
        </div>
        <div className="recipe-card-container">
          <div className="recipe-card">
            <div className="recipe-card-image">
              <div className="recipe-card-title">Meatballs</div>
              <div className="cookingtime"> </div>
            </div>
          </div>
        </div>
        <div className="recipe-card-container">
          <div className="recipe-card">
            <div className="recipe-card-image">
              <div className="recipe-card-title">Rasberry Cake</div>
              <div className="cookingtime"> </div>
            </div>
          </div>
        </div>
        <div className="recipe-card-container">
          <div className="recipe-card">
            <div className="recipe-card-image">
              <div className="recipe-card-title">Oreo Cookie Dessert</div>
              <div className="cookingtime"> </div>
            </div>
          </div>
        </div>
        <div className="recipe-card-container">
          <div className="recipe-card">
            <div className="recipe-card-image">
              <div className="recipe-card-title">Chicken Strips</div>
              <div className="cookingtime"> </div>
            </div>
          </div>
        </div>
        <div className="recipe-card-container">
          <div className="recipe-card">
            <div className="recipe-card-image">
              <div className="recipe-card-title">Toast with Blueberries</div>
              <div className="cookingtime"></div> 
            </div>
          </div>
        </div>
        <div className="recipe-card-container">
          <div className="recipe-card">
            <div className="recipe-card-image">
              <div className="recipe-card-title">Toast with Blueberries</div>
               <div className="cookingtime"> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
