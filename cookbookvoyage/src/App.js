import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Auth } from "./pages/auth";
import { AddRecipes } from "./pages/add-recipes";
import { NavBar } from "./components/navbar";


function App() {
  return (
    <div className="App">
      <div className="top-background"> 
        <h1 className="top-background-text">Cook Book Voyage</h1>
      </div>

      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/auth" element={<Auth />} />
          <Route path="/add-recipes" element={<AddRecipes />} />
        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
