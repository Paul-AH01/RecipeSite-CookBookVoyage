import React from 'react';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
export const NavBar = () => {
    const [cookies, setCookie] = useCookies(["access_token"]);
    const navigate = useNavigate();
    
    // it will clear the access_token cookie and remove the userID from localStorage
    const handleLogout = () => {
        setCookie("access_token", "");
        window.localStorage.removeItem("userID");
        navigate("/auth");
    };
    // this is the navbar component, it will be displayed on every page of the app.
    // if the user is not logged in, the navbar will display a link to the login/register page,
    // otherwise it will display a logout button.
    return (
        <div className="navbar">
            <NavLink exact to="/" activeClassName="activeLink">Home</NavLink>
            {cookies.access_token && <NavLink to="/add-recipes" activeClassName="activeLink">Add Recipes</NavLink>}
            {cookies.access_token && <NavLink to="/profile" activeClassName="activeLink">Profile</NavLink>}
            {!cookies.access_token ? (
                <NavLink to="/auth" activeClassName="activeLink">Login / Register</NavLink>
            ) : (
                <button onClick={handleLogout} className='logoutBtn'>Logout</button>
            )}
        </div>
    );
};
