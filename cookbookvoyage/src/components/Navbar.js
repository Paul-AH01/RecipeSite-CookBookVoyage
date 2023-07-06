import React from "react";
import "./Navbar.css";
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#recipes">Recipes</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {/* <div className="searchfunction">
       <label>Search</label>
       <input type="text">       */}
      </Navbar>
      );
    };

export default NavBar;
