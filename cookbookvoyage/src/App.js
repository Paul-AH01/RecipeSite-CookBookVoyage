import "./App.css";
import "./navbar.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RecipeDetails from "./pages/RecipeDetails";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <nav>
        <ul className="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-search">
            <input type="text" placeholder="Search" />
            <button>Search</button>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/recipes/:id" component={RecipeDetails} />
      </Routes>
    </Router>
    
  );
};

export default App;
